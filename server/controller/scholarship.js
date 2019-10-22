const multer = require('multer');
var express = require('express')
const path = require('path');


scholarshipServices = require('../services/services')


router = require('express').Router()

module.exports = router



// ====================  file upload ===================

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'./static')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage })




// the scrolarship api 

router.post('/insertScholarship', upload.single('profile'), insertScholarship)
router.get('/getScholarship', getscholarshipDetail)
router.put('/updateScholarship/:id', upload.single('profile'), updateScholarship)
router.delete('/deleteScholarship/:id', deleteScholarship)



// insert scholarship detail

function insertScholarship (req, res) {
  if (!req.file) {
    console.log('=============== file is not match =============')
  } else {
    console.log('==================controller request file  =========', req.file)
    console.log('==================controller body content  =========', req.body)
    scholarshipServices.insertScholarshipServices(req.file, req.body).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}




// get scholarship detail 

function getscholarshipDetail (req, res, next) {
  scholarshipServices.getScholarshipServices().then((data) => {
    console.log('----------- controller get scholarship detial ---------', data)
    res.status(200).send(data)
  }).catch((err) => {
    console.log('-------- controller get scholarship detial erro -------', err)
    res.status(400).send(err)
  })
}



// update scholarship detail

function updateScholarship (req, res, next) {
  if (!req.file) {
    console.log('=============== file is not match =============')
  } else {
    console.log('==================controller request file  =========', req.file)
    console.log('==================controller body content  =========', req.body)
    console.log('==================controller params  =========', req.params)
    scholarshipServices.updateScholarshipServices(req.params, req.file, req.body).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}



// delete scholarship detail

function deleteScholarship (req, res, next) {
  console.log('======= controllar request params =========', req.params)
  scholarshipServices.deleteScholarshipServices(req.params).then((data) => {
    console.log('======== controller delete result scholarship  =========', data)
    res.status(200).send(data)
  }).catch((err) => {
    console.log('====== controller delete scholarship error =====', err)
    res.status(400).send(err)
  })
}

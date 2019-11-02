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
router.post('/getScholarship', getscholarshipDetail)
router.put('/updateScholarship/:id', upload.single('profile'), updateScholarship)
router.delete('/deleteScholarship/:id', deleteScholarship)



// insert scholarship detail
function insertScholarship (req, res) {
  if (!req.file) {
    console.log('=============== file is not match =============')
  } else {
    console.log('==================controller request file  =========', req.file)
    console.log('==================controller body content  =========', req.body)
    //=============================== 
    console.log('=========== req headers ===========', req.headers.jwttoken)
    // header jwt token dcrept method use and do can store id
    // ===============================
    scholarshipServices.insertScholarshipServices(req.file, req.body, req.headers.jwttoken).then((data) => {
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
  console.log('--------------')
  console.log('--------------the get body ------------', req.query.from, req.query.to)
  var dateFrom = req.query.from;
  var dateTo = req.query.to;
  if (dateFrom && dateTo) {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // =======================================
    scholarshipServices.getScholarshipParticularDateServices(dateFrom , dateTo).then((data) => {
      console.log('----------- controller get scholarship detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get scholarship detial erro -------', err)
      res.status(400).send(err)
    })
  } else if (dateFrom) {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // =======================================
    scholarshipServices.getScholarshipTodayDateServices(dateFrom).then((data) => {
      console.log('----------- controller get scholarship detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get scholarship detial erro -------', err)
      res.status(400).send(err)
    })
  } else {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // =======================================
    scholarshipServices.getScholarshipServices().then((data) => {
      console.log('----------- controller get scholarship detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get scholarship detial erro -------', err)
      res.status(400).send(err)
    })
  }
}

// update scholarship detail
function updateScholarship (req, res, next) {
  if (!req.file) {
    console.log('=============== file is not match =============')
  } else {
    console.log('==================controller request file  =========', req.file)
    console.log('==================controller body content  =========', req.body)
    console.log('==================controller params  =========', req.params)
    // =======================================
    console.log('=========== req headers ===========', req.headers.jwttoken)
    // header jwt token dcrept method use and do can store id
    // =======================================
    scholarshipServices.updateScholarshipServices(req.params, req.file, req.body , req.headers.jwttoken).then((data) => {
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
  // =======================================
  console.log('=========== req headers ===========', req.headers.jwttoken)
  // header jwt token dcrept method use and do can store id
  // ========================================
  scholarshipServices.deleteScholarshipServices(req.params, req.headers.jwttoken).then((data) => {
    console.log('======== controller delete result scholarship  =========', data)
    res.status(200).send(data)
  }).catch((err) => {
    console.log('====== controller delete scholarship error =====', err)
    res.status(400).send(err)
  })
}

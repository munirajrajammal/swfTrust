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




// the expenditure api 

router.post('/insertPopupTest', upload.single('profile'), insertPopupTest)
router.get('/getPopupTest', getPopupTest)
router.put('/updatePopupTest/:id', upload.single('profile'), updatePopupTest)
router.delete('/deletePopupTest/:id', deletePopupTest)



// insert popup detail
function insertPopupTest (req, res) {
  if (!req.file) {
    console.log('=============== file is not match =============')
  } else {
    console.log('==================controller request file  =========', req.file)
    console.log('==================controller body content  =========', req.body)
    //=============================== 
    console.log('=========== req headers ===========', req.headers.jwttoken)
    // header jwt token dcrept method use and do can store id
    // ===============================
    scholarshipServices.insertPopupTestServices(req.file, req.body, req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// get popup detail 
function getPopupTest (req, res, next) {
  // ======================================
  // header jwt token dcrept method use and do can store id
  // =======================================
  scholarshipServices.getPopupTestServices().then((data) => {
    console.log('----------- controller get popup detial ---------', data)
    res.status(200).send(data)
  }).catch((err) => {
    console.log('-------- controller get popup detial erro -------', err)
    res.status(400).send(err)
  })
}

// update popup detail
function updatePopupTest (req, res, next) {
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
    scholarshipServices.updatePopupTestServices(req.params, req.file, req.body , req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// delete popup detail
function deletePopupTest (req, res, next) {
  console.log('======= controllar request params =========', req.params)
  // =======================================
  console.log('=========== req headers ===========', req.headers.jwttoken)
  // header jwt token dcrept method use and do can store id
  // ========================================
  scholarshipServices.deletePopupTestServices(req.params, req.headers.jwttoken).then((data) => {
    console.log('======== controller delete result blogs  =========', data)
    res.status(200).send(data)
  }).catch((err) => {
    console.log('====== controller delete blogs error =====', err)
    res.status(400).send(err)
  })
}

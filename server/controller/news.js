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

router.post('/insertNewsDetail', upload.single('profile'), insertNewsDetail)
router.post('/getNewsDetail', getNewsDetail)
router.put('/updateNewsDetail/:id', upload.single('profile'), updateNewsDetail)
router.delete('/deleteNewsDetail/:id', deleteNewsDetail)



// insert news detail
function insertNewsDetail (req, res) {
  if (!req.file) {
    console.log('=============== file is not match =============')
  } else {
    console.log('==================controller request file  =========', req.file)
    console.log('==================controller body content  =========', req.body)
    //=============================== 
    console.log('=========== req headers ===========', req.headers.jwttoken)
    // header jwt token dcrept method use and do can store id
    // ===============================
    scholarshipServices.insertNewsDetailServices(req.file, req.body, req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// get news detail 
function getNewsDetail (req, res, next) {
  console.log('--------------')
  console.log('--------------the get body ------------', req.query.from, req.query.to)
  var dateFrom = req.query.from;
  var dateTo = req.query.to;
  if (dateFrom && dateTo) {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // ======================================
    scholarshipServices.getNewsDetailParticularDateServices(dateFrom , dateTo).then((data) => {
      console.log('----------- controller get news detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get news detial erro -------', err)
      res.status(400).send(err)
    })
  } else if (dateFrom) {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // ======================================
    scholarshipServices.getNewsDetailTodayDateServices(dateFrom).then((data) => {
      console.log('----------- controller get news detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get news detial erro -------', err)
      res.status(400).send(err)
    })
  } else {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // =======================================
    scholarshipServices.getNewsDetailServices().then((data) => {
      console.log('----------- controller get news detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get news detial erro -------', err)
      res.status(400).send(err)
    })
  }
}

// update news detail
function updateNewsDetail (req, res, next) {
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
    scholarshipServices.updateNewsDetailServices(req.params, req.file, req.body , req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// delete news detail
function deleteNewsDetail (req, res, next) {
  console.log('======= controllar request params =========', req.params)
  // =======================================
  console.log('=========== req headers ===========', req.headers.jwttoken)
  // header jwt token dcrept method use and do can store id
  // ========================================
  scholarshipServices.deleteNewsDetailServices(req.params, req.headers.jwttoken).then((data) => {
    console.log('======== controller delete result news  =========', data)
    res.status(200).send(data)
  }).catch((err) => {
    console.log('====== controller delete news error =====', err)
    res.status(400).send(err)
  })
}

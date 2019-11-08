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

router.post('/insertBanner', upload.single('profile'), insertBanner)
router.post('/getBanner', getBanner)
router.put('/updateBanner/:id', upload.single('profile'), updateBanner)
router.delete('/deletBanner/:id', deletBanner)



// insert banner detail
function insertBanner (req, res) {
  if (!req.file) {
    console.log('=============== file is not match =============')
  } else {
    console.log('==================controller request file  =========', req.file)
    console.log('==================controller body content  =========', req.body)
    //=============================== 
    console.log('=========== req headers ===========', req.headers.jwttoken)
    // header jwt token dcrept method use and do can store id
    // ===============================
    scholarshipServices.insertBannerServices(req.file, req.body, req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// get banner detail 
function getBanner (req, res, next) {
  console.log('--------------')
  console.log('--------------the get body ------------', req.query.from, req.query.to)
  var dateFrom = req.query.from;
  var dateTo = req.query.to;
  if (dateFrom && dateTo) {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // ======================================
    scholarshipServices.getBannerParticularDateServices(dateFrom , dateTo).then((data) => {
      console.log('----------- controller get banner detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get banner detial erro -------', err)
      res.status(400).send(err)
    })
  } else if (dateFrom) {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // ======================================
    scholarshipServices.getBannerTodayDateServices(dateFrom).then((data) => {
      console.log('----------- controller get banner detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get banner detial erro -------', err)
      res.status(400).send(err)
    })
  } else {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // =======================================
    scholarshipServices.getBannerServices().then((data) => {
      console.log('----------- controller get banner detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get banner detail erro -------', err)
      res.status(400).send(err)
    })
  }
}

// update banner detail
function updateBanner (req, res, next) {
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
    scholarshipServices.updateBannerServices(req.params, req.file, req.body , req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// delete banner detail
function deletBanner (req, res, next) {
  console.log('======= controllar request params =========', req.params)
  // =======================================
  console.log('=========== req headers ===========', req.headers.jwttoken)
  // header jwt token dcrept method use and do can store id
  // ========================================
  scholarshipServices.deleteBannerServices(req.params, req.headers.jwttoken).then((data) => {
    console.log('======== controller delete result banner  =========', data)
    res.status(200).send(data)
  }).catch((err) => {
    console.log('====== controller delete banner error =====', err)
    res.status(400).send(err)
  })
}

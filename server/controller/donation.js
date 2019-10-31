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

router.post('/insertDonation', upload.single('profile'), insertDonation)
router.get('/getDonation', getDonation)
router.put('/updateDonation/:id', upload.single('profile'), updateDonation)
router.delete('/deleteDonation/:id', deleteDonation)



// insert donation detail
function insertDonation (req, res) {
  if (!req.file) {
    console.log('=============== file is not match =============')
  } else {
    console.log('==================controller request file  =========', req.file)
    console.log('==================controller body content  =========', req.body)
    //=============================== 
    console.log('=========== req headers ===========', req.headers.jwttoken)
    // header jwt token dcrept method use and do can store id
    // ===============================
    scholarshipServices.insertDonationServices(req.file, req.body, req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// get donation detail 
function getDonation (req, res, next) {
  // ======================================
  // header jwt token dcrept method use and do can store id
  // =======================================
  scholarshipServices.getDonationServices().then((data) => {
    console.log('----------- controller get donation detial ---------', data)
    res.status(200).send(data)
  }).catch((err) => {
    console.log('-------- controller get donations detial erro -------', err)
    res.status(400).send(err)
  })
}

// update donation detail
function updateDonation (req, res, next) {
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
    scholarshipServices.updateDonationServices(req.params, req.file, req.body , req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// delete donations detail
function deleteDonation (req, res, next) {
  console.log('======= controllar request params =========', req.params)
  // =======================================
  console.log('=========== req headers ===========', req.headers.jwttoken)
  // header jwt token dcrept method use and do can store id
  // ========================================
  scholarshipServices.deleteDonationsServices(req.params, req.headers.jwttoken).then((data) => {
    console.log('======== controller delete result donations  =========', data)
    res.status(200).send(data)
  }).catch((err) => {
    console.log('====== controller delete donations error =====', err)
    res.status(400).send(err)
  })
}

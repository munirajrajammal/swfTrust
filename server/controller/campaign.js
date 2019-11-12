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




// the campaign api 

router.post('/insertcampaign', upload.single('profile'), insertcampaign)
router.post('/getCampaign', getCampaign)
router.put('/updateCampaign/:id', upload.single('profile'), updateCampaign)
router.delete('/deletCampaign/:id', deletCampaign)



// insert campaign detail
function insertcampaign (req, res) {
  if (!req.file) {
    console.log('=============== file is not match =============')
  } else {
    console.log('==================controller request file  =========', req.file)
    console.log('==================controller body content  =========', req.body)
    //=============================== 
    console.log('=========== req headers ===========', req.headers.jwttoken)
    // header jwt token dcrept method use and do can store id
    // ===============================
    scholarshipServices.insertCampaignServices(req.file, req.body, req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// get campaign detail 
function getCampaign (req, res, next) {
  console.log('--------------')
  console.log('--------------the get body ------------', req.query.from, req.query.to)
  var dateFrom = req.query.from;
  var dateTo = req.query.to;
  if (dateFrom && dateTo) {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // ======================================
    scholarshipServices.getcampaignParticularDateServices(dateFrom , dateTo).then((data) => {
      console.log('----------- controller get campaign detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get campaign detial erro -------', err)
      res.status(400).send(err)
    })
  } else if (dateFrom) {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // ======================================
    scholarshipServices.getcampaignTodayDateServices(dateFrom).then((data) => {
      console.log('----------- controller get campaign detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get campaign detial erro -------', err)
      res.status(400).send(err)
    })
  } else {
          // ======================================
    // header jwt token dcrept method use and do can store id
    // =======================================
    scholarshipServices.getCampaignServices().then((data) => {
      console.log('----------- controller get campaign detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get campaign detail erro -------', err)
      res.status(400).send(err)
    })
  }
}

// update campaign detail
function updateCampaign (req, res, next) {
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
    scholarshipServices.updateCampaignServices(req.params, req.file, req.body , req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// delete campaign detail
function deletCampaign (req, res, next) {
  console.log('======= controllar request params =========', req.params)
  // =======================================
  console.log('=========== req headers ===========', req.headers.jwttoken)
  // header jwt token dcrept method use and do can store id
  // ========================================
  scholarshipServices.deleteCampaignServices(req.params, req.headers.jwttoken).then((data) => {
    console.log('======== controller delete result campaign  =========', data)
    res.status(200).send(data)
  }).catch((err) => {
    console.log('====== controller delete campaign error =====', err)
    res.status(400).send(err)
  })
}

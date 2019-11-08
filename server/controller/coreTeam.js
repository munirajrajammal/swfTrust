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

router.post('/insertCoreTeam', upload.single('profile'), insertCoreTeam)
router.post('/getCoreTeam', getCoreTeam)
router.put('/updateCoreTeam/:id', upload.single('profile'), updateCoreTeam)
router.delete('/deletCoreTeam/:id', deletCoreTeam)



// insert core team detail
function insertCoreTeam (req, res) {
  if (!req.file) {
    console.log('=============== file is not match =============')
  } else {
    console.log('==================controller request file  =========', req.file)
    console.log('==================controller body content  =========', req.body)
    //=============================== 
    console.log('=========== req headers ===========', req.headers.jwttoken)
    // header jwt token dcrept method use and do can store id
    // ===============================
    scholarshipServices.insertCoreTeamServices(req.file, req.body, req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// get core team detail 
function getCoreTeam (req, res, next) {
  console.log('--------------')
  console.log('--------------the get body ------------', req.query.from, req.query.to)
  var dateFrom = req.query.from;
  var dateTo = req.query.to;
  if (dateFrom && dateTo) {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // ======================================
    scholarshipServices.getCoreTeamParticularDateServices(dateFrom , dateTo).then((data) => {
      console.log('----------- controller get core team detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get core team detial erro -------', err)
      res.status(400).send(err)
    })
  } else if (dateFrom) {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // ======================================
    scholarshipServices.getCoreTeamTodayDateServices(dateFrom).then((data) => {
      console.log('----------- controller get core team detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get core team detial erro -------', err)
      res.status(400).send(err)
    })
  } else {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // =======================================
    scholarshipServices.getCoreTeamServices().then((data) => {
      console.log('----------- controller get core team detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get core team detail erro -------', err)
      res.status(400).send(err)
    })
  }
}

// update core team detail
function updateCoreTeam (req, res, next) {
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
    scholarshipServices.updateCoreTeamServices(req.params, req.file, req.body , req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// delete core team detail
function deletCoreTeam (req, res, next) {
  console.log('======= controllar request params =========', req.params)
  // =======================================
  console.log('=========== req headers ===========', req.headers.jwttoken)
  // header jwt token dcrept method use and do can store id
  // ========================================
  scholarshipServices.deleteCoreTeamServices(req.params, req.headers.jwttoken).then((data) => {
    console.log('======== controller delete result core team  =========', data)
    res.status(200).send(data)
  }).catch((err) => {
    console.log('====== controller delete core team error =====', err)
    res.status(400).send(err)
  })
}

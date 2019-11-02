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

router.post('/insertExpenditure', upload.single('profile'), insertExpenditure)
router.post('/getExpenditure', getExpenditureDetails)
router.put('/updateExpenditure/:id', upload.single('profile'), updateExpenditure)
router.delete('/deleteExpenditure/:id', deleteExpenditure)



// insert expenditure detail
function insertExpenditure (req, res) {
  if (!req.file) {
    console.log('=============== file is not match =============')
  } else {
    console.log('==================controller request file  =========', req.file)
    console.log('==================controller body content  =========', req.body)
    //=============================== 
    console.log('=========== req headers ===========', req.headers.jwttoken)
    // header jwt token dcrept method use and do can store id
    // ===============================
    scholarshipServices.insertExpenditureServices(req.file, req.body, req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// get expenditure detail 
function getExpenditureDetails (req, res, next) {
  console.log('--------------')
  console.log('--------------the get body ------------', req.query.from, req.query.to)
  var dateFrom = req.query.from;
  var dateTo = req.query.to;
  if (dateFrom && dateTo) {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // =======================================
    scholarshipServices.getExpenditureParticularDateServices(dateFrom , dateTo).then((data) => {
      console.log('----------- controller get expenditure detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get expenditure detial erro -------', err)
      res.status(400).send(err)
    })
  } else if (dateFrom) {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // =======================================
    scholarshipServices.getExpenditureTodayDateServices(dateFrom).then((data) => {
      console.log('----------- controller get expenditure detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get expenditure detial erro -------', err)
      res.status(400).send(err)
    })
  } else {
    // ======================================
    // header jwt token dcrept method use and do can store id
    // =======================================
    scholarshipServices.getExpenditureServices().then((data) => {
      console.log('----------- controller get expenditure detial ---------', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('-------- controller get expenditure detial erro -------', err)
      res.status(400).send(err)
    })
  }
}

// update expenditure detail
function updateExpenditure (req, res, next) {
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
    scholarshipServices.updateExpenditureServices(req.params, req.file, req.body , req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// delete expenditure detail
function deleteExpenditure (req, res, next) {
  console.log('======= controllar request params =========', req.params)
  // =======================================
  console.log('=========== req headers ===========', req.headers.jwttoken)
  // header jwt token dcrept method use and do can store id
  // ========================================
  scholarshipServices.deleteExpenditureServices(req.params, req.headers.jwttoken).then((data) => {
    console.log('======== controller delete result expenditure  =========', data)
    res.status(200).send(data)
  }).catch((err) => {
    console.log('====== controller delete expenditure error =====', err)
    res.status(400).send(err)
  })
}

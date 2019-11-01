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

router.post('/insertTestimonial', upload.single('profile'), insertTestimonial)
router.get('/getTestimonial', getTestimonial)
router.put('/updateTestimonial/:id', upload.single('profile'), updateTestimonial)
router.delete('/deleteTestimonial/:id', deleteTestimonial)



// insert testimonial detail
function insertTestimonial (req, res) {
  if (!req.file) {
    console.log('=============== file is not match =============')
  } else {
    console.log('==================controller request file  =========', req.file)
    console.log('==================controller body content  =========', req.body)
    //=============================== 
    console.log('=========== req headers ===========', req.headers.jwttoken)
    // header jwt token dcrept method use and do can store id
    // ===============================
    scholarshipServices.insertTestimonialServices(req.file, req.body, req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// get testimonial detail 
function getTestimonial (req, res, next) {
  // ======================================
  // header jwt token dcrept method use and do can store id
  // =======================================
  scholarshipServices.getTestimonialServices().then((data) => {
    console.log('----------- controller get blogs detial ---------', data)
    res.status(200).send(data)
  }).catch((err) => {
    console.log('-------- controller get blogs detial erro -------', err)
    res.status(400).send(err)
  })
}

// update testimonial detail
function updateTestimonial (req, res, next) {
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
    scholarshipServices.updateTestimonialServices(req.params, req.file, req.body , req.headers.jwttoken).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}

// delete testimonial detail
function deleteTestimonial (req, res, next) {
  console.log('======= controllar request params =========', req.params)
  // =======================================
  console.log('=========== req headers ===========', req.headers.jwttoken)
  // header jwt token dcrept method use and do can store id
  // ========================================
  scholarshipServices.deleteTestimonialServices(req.params, req.headers.jwttoken).then((data) => {
    console.log('======== controller delete result blogs  =========', data)
    res.status(200).send(data)
  }).catch((err) => {
    console.log('====== controller delete blogs error =====', err)
    res.status(400).send(err)
  })
}

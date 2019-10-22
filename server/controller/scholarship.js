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
router.post('/uploads', upload.single('profile'), insertFile)


// the upload file
function insertFile (req, res) {
  if (!req.file) {
    console.log('=============== file is not match =============')
  } else {
    console.log('==================controller request file  =========', req.file)
    console.log('==================controller body content  =========', req.body)
    scholarshipServices.fileUploaded(req.file, req.body).then((data) => {
      console.log('=========== result of data ==========', data)
      res.status(200).send(data)
    }).catch((err) => {
      console.log('============= error ===========', err)
      res.status(400).send(err)
    })
  }
}


// the inser scrolarship 

function insertScholarship(req, res, next) {
  console.log('========== the request =========', req)
  console.log('=========== the request data =====',req.file);
  if (!req.file) {
    console.log('=========== file not in insert  ==============')
  } else {
    console.log('============= req file in the insert file ========', req.file.filename)
    console.log('============= req file in the insert file ========', req.body.group_name)
    questionnaireServices.fileTextInsert(req.file.filename, req.body.group_name).then((resultFileInsert) => {
      console.log('----------- the file insert success --------',resultFileInsert )
      res.status(200).send(resultFileInsert)
    }).catch((err) => {
      console.log('=========== the insert file is error', err)
      res.status(400).send(err)
    })
  }
  }

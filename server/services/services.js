module.exports = {

  // =============================== scholarship
  insertScholarshipServices,
  getScholarshipServices,
  updateScholarshipServices,
  deleteScholarshipServices,

  // ============================== expenditure
  insertExpenditureServices,
  getExpenditureServices,
  updateExpenditureServices,
  deleteExpenditureServices,
  // ------- date 
  getExpenditureParticularDateServices,
  getExpenditureTodayDateServices,

  // ============================== news
  insertNewsDetailServices,
  getNewsDetailServices,
  updateNewsDetailServices,
  deleteNewsDetailServices,
  // ------ date
  getNewsDetailParticularDateServices,
  getNewsDetailTodayDateServices,

  // ============================= donation
  insertDonationServices,
  getDonationServices,
  updateDonationServices,
  deleteDonationsServices,
  // ------ date
  getDonationParticularServices,
  getDonationOneDayServices,

  // ============================= blogs
  insertBlogsDetailServices,
  getBlogsDetailServices,
  updateBlogsDetailServices,
  deleteBlogsDetailServices,

  // ============================= testimonial
  insertTestimonialServices,
  getTestimonialServices,
  updateTestimonialServices,
  deleteTestimonialServices,
  // ------ date 
  getTestimonialParticularDateServices,
  getTestimonialTodayDateServices,

  // ============================= popupTest
  insertPopupTestServices,
  getPopupTestServices,
  updatePopupTestServices,
  deletePopupTestServices,
  // ------ date
  getPopupTestParticularDateServices,
  getPopupTestTodayDateServices,

};

//  ============================================================ scholarship

//  insert the scholarship detail
function insertScholarshipServices(file, body, create_id) {
  console.log('=========== services ====== file name ===== ', file.filename)
  console.log('=========== services ====== content ===== ', body)
  console.log('========== create id =============', create_id)
  return new Promise((resolve, reject) => {
    console.log('========== promis inside =======')
    console.log('--------the file --------', file)
    queryInsert = 'INSERT INTO scholarship(name, email, amount, members, file_name, status, created_by) VALUES("' + body.name + '" ,"' + body.email + '","' + body.amount + '",' + body.members + ',"' + file.filename + '",' + false + ',"' + create_id + '")';
    console.log('============== the query of data ===============', queryInsert)
    db.query(queryInsert, (err, result, field) => {
      console.log('---------- result of data----------', result)
      if (err)
        reject("error")
      resolve(result)
    })
  })
}

// get the scholarship detial
function getScholarshipServices() {
  return new Promise((resolve, reject) => {
    query = 'select * from scholarship where status=' + 0;
    db.query(query, (err, result, field) => {
      console.log('----- scholarship detial db ------', result)
      if (err)
        reject("error")
      resolve(result)
    })
  })
}

// update the scholarship detial
function updateScholarshipServices(params, files, scholarshipDetail, updated_by) {
  console.log('=========== services ====== params ===== ', params.id)
  console.log('=========== services ====== file ===== ', files.filename)
  console.log('=========== services ====== scholarship detial ===== ', scholarshipDetail)
  console.log('===========updated by user id jwttoken ===============', updated_by)
  return new Promise((resolve, reject) => {
    console.log('========== promis inside =======')
    console.log('--------the file --------', files)
    queryUpdate = 'UPDATE scholarship set name="' + scholarshipDetail.name + '" , email="' + scholarshipDetail.email + '" , amount=' + scholarshipDetail.amount + ' , members=' + scholarshipDetail.members + ' , file_name="' + files.filename + '", updated_by="' + updated_by + '" where id=' + params.id;
    console.log('============== the query of data ===============', queryUpdate)
    db.query(queryUpdate, (err, result, field) => {
      console.log('---------- result of data----------', result)
      if (err)
        reject("error")
      resolve(result)
    })
  })
}

// delete the scholarship detail
function deleteScholarshipServices(params, update_id) {
  console.log('========= the updated id of user ==========', update_id)
  return new Promise((resolve, reject) => {
    queryDelete = 'UPDATE scholarship set status=' + true + ' , updated_by="' + update_id + '" where id=' + params.id;
    console.log('======', queryDelete)
    db.query(queryDelete, (err, result, field) => {
      console.log('----- scholarship detial db ------', result)
      if (err)
        reject('error')
      resolve(result)
    })
  })
}







// ======================================================   expenditure

// insert the expenditure detials
function insertExpenditureServices(file, body, create_id) {
  console.log('=========== services ====== file name ===== ', file.filename)
  console.log('=========== services ====== content ===== ', body)
  console.log('========== create id =============', create_id)
  return new Promise((resolve, reject) => {
    console.log('========== promis inside =======')
    console.log('--------the file --------', file)
    queryInsert = 'INSERT INTO expenditure(program_name, amount, program_date, created_by) VALUES("' + body.programName + '" ,"' + body.amount + '","' + body.programDate + '","' + create_id + '")';
    console.log('============== the query of data ===============', queryInsert)
    db.query(queryInsert, (err, result, field) => {
      console.log('---------- result of data----------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// get the data of expenditure details
function getExpenditureServices() {
  return new Promise((resolve, reject) => {
    query = 'select * from expenditure where status=' + 0;
    db.query(query, (err, result, field) => {
      console.log('----- expenditure detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

function getExpenditureParticularDateServices (fromDate, toDate) {
  return new Promise((resolve, reject) => {
    query = 'select * from expenditure where status='+0+' && created_at>="'+fromDate+'" && created_at<="'+toDate+'"';
    db.query(query, (err, result, field) => {
      console.log('----- expenditure detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

function getExpenditureTodayDateServices (fromDate) {
  return new Promise((resolve, reject) => {
    query = 'select * from expenditure where status='+0+' && DATE(created_at)=DATE(NOW())';
    db.query(query, (err, result, field) => {
      console.log('----- expenditure detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// update the expenditure details
function updateExpenditureServices(expenditure_params, files, expenditure_detail, token) {
  console.log('=========== services ====== params ==updated_by=== ', expenditure_params)
  console.log('=========== services ====== file ===== ', files)
  console.log('=========== services ====== scholarship detial ===== ', expenditure_detail)
  console.log('===========updated by user id jwttoken ===============', token)
  return new Promise((resolve, reject) => {
    console.log('========== promis inside =======')
    console.log('--------the file --------', files)
    queryUpdate = 'UPDATE expenditure set program_name="' + expenditure_detail.programName + '" , amount="' + expenditure_detail.amount + '" , program_date="' + expenditure_detail.programDate + '" , updated_by="' + token + '" where id=' + expenditure_params.id;
    console.log('============== the query of data ===============', queryUpdate)
    db.query(queryUpdate, (err, result, field) => {
      console.log('---------- result of data----------', result)
      if (err)
        reject("error")
      resolve(result)
    })
  })
}

// delete of expenditure detail use id
function deleteExpenditureServices(expenditure_params, expenditure_update_id) {
  console.log('========= the updated id of user ==========', expenditure_update_id)
  return new Promise((resolve, reject) => {
    queryDelete = 'UPDATE expenditure set status=' + true + ' , updated_by="' + expenditure_update_id + '" where id=' + expenditure_params.id;
    console.log('======', queryDelete)
    db.query(queryDelete, (err, result, field) => {
      console.log('----- expenditure detial db ------', result)
      if (err)
        reject('error')
      resolve(result)
    })
  })
}








// =============================================== news

// the create news details
function insertNewsDetailServices(newsFile, newsBody, newsTokenId) {
  console.log('=========== services ====== file name ===== ', newsFile.filename)
  console.log('=========== services ====== content ===== ', newsBody)
  console.log('========== create id =============', newsTokenId)
  return new Promise((resolve, reject) => {
    console.log('========== promis inside =======')
    console.log('--------the file --------', newsFile)
    queryInsert = 'INSERT INTO news(title, content, file_name, created_by) VALUES("' + newsBody.title + '" ,"' + newsBody.content + '","' + newsFile.filename + '",' + newsTokenId + ')';
    console.log('============== the query of data ===============', queryInsert)
    db.query(queryInsert, (err, result, field) => {
      console.log('---------- result of data----------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// the get news detail 
function getNewsDetailServices() {
  return new Promise((resolve, reject) => {
    query = 'select * from news where status=' + 0;
    db.query(query, (err, result, field) => {
      console.log('----- news detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

function getNewsDetailParticularDateServices (fromDate , toDate) {
  return new Promise((resolve, reject) => {
    query = 'select * from news where status='+0+' && created_at>="'+fromDate+'" && created_at<="'+toDate+'"';
    db.query(query, (err, result, field) => {
      console.log('----- news detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

function getNewsDetailTodayDateServices (fromDate) {
  console.log('=============', fromDate)
  return new Promise((resolve, reject) => {
    query = 'select * from news where status='+0+' && DATE(created_at)=DATE(NOW())';
    db.query(query, (err, result, field) => {
      console.log('----- news detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// the update news detail
function updateNewsDetailServices(newsParams, newsFileInsert, newsBody, newsTokenId) {
  console.log('=========== services ====== params ==updated_by=== ', newsParams.id)
  console.log('=========== services ====== file ===== ', newsFileInsert.filename)
  console.log('=========== services ====== news detial ===== ', newsBody)
  console.log('===========updated by user id jwttoken ===============', newsTokenId)
  return new Promise((resolve, reject) => {
    console.log('========== promis inside =======')
    console.log('--------the file --------', newsFileInsert)
    queryUpdate = 'UPDATE news set title="' + newsBody.title + '" , content="' + newsBody.content + '" , file_name="' + newsFileInsert.filename + '" , updated_by="' + newsTokenId + '" where id=' + newsParams.id;
    console.log('============== the query of data ===============', queryUpdate)
    db.query(queryUpdate, (err, result, field) => {
      console.log('---------- result of data----------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// the delete news detail
function deleteNewsDetailServices(newsParamsId, newsUpdateId) {
  console.log('========= the updated id of user ==========', newsUpdateId)
  return new Promise((resolve, reject) => {
    queryDelete = 'UPDATE news set status=' + true + ' , updated_by="' + newsUpdateId + '" where id=' + newsParamsId.id;
    console.log('======', queryDelete)
    db.query(queryDelete, (err, result, field) => {
      console.log('----- news detial db ------', result)
      if (err)
        reject('error')
      resolve(result)
    })
  })
}









// =================================================== donation

// the insert donation
function insertDonationServices(file, donationDetail, created_id) {
  console.log('=========== services ====== file name ===== ', file)
  console.log('=========== services ====== detail ===== ', donationDetail)
  console.log('========== create id =============', created_id)
  return new Promise((resolve, reject) => {
    console.log('========== promis inside =======')
    console.log('--------the file --------', file)
    queryInsert = 'INSERT INTO donations (member_id, amount, address, created_by) VALUES(' + donationDetail.member_id + ' ,"' + donationDetail.amount + '","' + donationDetail.address + '",' + created_id + ')';
    console.log('============== the query of data ===============', queryInsert)
    db.query(queryInsert, (err, result, field) => {
      console.log('---------- result of data----------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// the get data of donation
function getDonationServices() {
  return new Promise((resolve, reject) => {
    query = 'select * from donations where status=' + 0;
    db.query(query, (err, result, field) => {
      console.log('----- donations detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

function getDonationParticularServices (fromDate , toDate) {
  return new Promise((resolve, reject) => {
    console.log('======= from date --- to date ======', fromDate , toDate)
    query = 'select * from donations where status='+0+' && created_at>="'+fromDate+'" && created_at<="'+toDate+'"';
    console.log('--------------', query)
    db.query(query, (err, result, field) => {
      console.log('----- donations detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

function getDonationOneDayServices (fromDate) {
  return new Promise((resolve, reject) => {
    console.log('======= from date --- to date ======', fromDate)
    query = 'select * from donations where status='+0+' && DATE(created_at)=DATE(NOW())';
    console.log('--------------', query)
    db.query(query, (err, result, field) => {
      console.log('----- donations detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// the update of donation detail
function updateDonationServices(donationParamsId, donationExfile, donationDetails, donations_updated_id) {
  console.log('=========== services ====== params ==updated_by=== ', donationParamsId.id)
  console.log('=========== services ====== file ===== ', donationExfile.filename)
  console.log('=========== services ====== donations detial ===== ', donationDetails)
  console.log('===========updated by user id jwttoken ===============', donations_updated_id)
  return new Promise((resolve, reject) => {
    console.log('========== promis inside =======')
    console.log('--------the file --------', donationExfile)
    queryUpdate = 'UPDATE donations set amount=' + donationDetails.amount + ' , address="' + donationDetails.address + '" , updated_by=' + donations_updated_id + ' , member_id="' + donationDetails.member_id + '" where id=' + donationParamsId.id;
    console.log('============== the query of data ===============', queryUpdate)
    db.query(queryUpdate, (err, result, field) => {
      console.log('---------- result of data----------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// the delete of donations details
function deleteDonationsServices(donationParamsId, donations_updated_id) {
  console.log('========= the updated id of user ==========', donations_updated_id)
  return new Promise((resolve, reject) => {
    queryDelete = 'UPDATE donations set status=' + true + ' , updated_by="' + donations_updated_id + '" where id=' + donationParamsId.id;
    console.log('======', queryDelete)
    db.query(queryDelete, (err, result, field) => {
      console.log('----- news detial db ------', result)
      if (err)
        reject('error')
      resolve(result)
    })
  })
}









// ============================================== blogs

// the insert of blogs detail
function insertBlogsDetailServices(blogsFile, blogsContent, blogsCreatedId) {
  console.log('=========== services ====== file name ===== ', blogsFile.filename)
  console.log('=========== services ====== detail ===== ', blogsContent)
  console.log('========== create id =============', blogsCreatedId)
  return new Promise((resolve, reject) => {
    console.log('========== promis inside =======')
    console.log('--------the file --------', blogsFile)
    queryInsert = 'INSERT INTO blogs (title, content, tags, cat, created_by) VALUES("' + blogsContent.title + '" ,"' + blogsContent.content + '","' + blogsContent.tags + '", "' + blogsFile.filename + '" ,' + blogsCreatedId + ')';
    console.log('============== the query of data ===============', queryInsert)
    db.query(queryInsert, (err, result, field) => {
      console.log('---------- result of data----------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// the get of data blog
function getBlogsDetailServices() {
  return new Promise((resolve, reject) => {
    query = 'select * from blogs where status=' + 0;
    db.query(query, (err, result, field) => {
      console.log('----- blogs detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// the update of blogs data
function updateBlogsDetailServices(blogParamsId, blogFile, blogContent, blogUpdateId) {
  console.log('=========== services ====== params ==updated_by=== ', blogParamsId.id)
  console.log('=========== services ====== file ===== ', blogFile.filename)
  console.log('=========== services ====== blogs detial ===== ', blogContent)
  console.log('===========updated by user id jwttoken ===============', blogUpdateId)
  return new Promise((resolve, reject) => {
    console.log('========== promis inside =======')
    console.log('--------the file --------', blogFile)
    queryUpdate = 'UPDATE blogs set title="' + blogContent.title + '" , content="' + blogContent.content + '" , tags="' + blogContent.tag + '" , cat="' + blogFile.filename + '" ,  updated_by=' + blogUpdateId + ' where id=' + blogParamsId.id;
    console.log('============== the query of data ===============', queryUpdate)
    db.query(queryUpdate, (err, result, field) => {
      console.log('---------- result of data----------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// the delete of blogs data
function deleteBlogsDetailServices(blogParamsId, blog_update_id) {
  console.log('========= the updated id of user ==========', blog_update_id)
  return new Promise((resolve, reject) => {
    queryDelete = 'UPDATE blogs set status=' + true + ' , updated_by="' + blog_update_id + '" where id=' + blogParamsId.id;
    console.log('======', queryDelete)
    db.query(queryDelete, (err, result, field) => {
      console.log('----- news detial db ------', result)
      if (err)
        reject('error')
      resolve(result)
    })
  })
}







// ========================================= Testimonial
// the insert testimonial data
function insertTestimonialServices(testimonialFile, testimonialContent, testimonialCreateId) {
  console.log('=========== services ====== file name ===== ', testimonialFile.filename)
  console.log('=========== services ====== detail ===== ', testimonialContent)
  console.log('========== create id =============', testimonialCreateId)
  return new Promise((resolve, reject) => {
    console.log('========== promis inside =======')
    console.log('--------the file --------', testimonialFile)
    queryInsert = 'INSERT INTO testimonial (client_name, message, ratings, created_by) VALUES("' + testimonialContent.clientName + '" ,"' + testimonialContent.message + '","' + testimonialContent.ratings + '", ' + testimonialCreateId + ')';
    console.log('============== the query of data ===============', queryInsert)
    db.query(queryInsert, (err, result, field) => {
      console.log('---------- result of data----------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// the get testimonial detail 
function getTestimonialServices() {
  return new Promise((resolve, reject) => {
    query = 'select * from testimonial where status=' + 0;
    db.query(query, (err, result, field) => {
      console.log('----- blogs detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

function getTestimonialParticularDateServices (fromDate , toDate) {
  return new Promise((resolve, reject) => {
    query = 'select * from testimonial where status='+0+' && created_at>="'+fromDate+'" && created_at<="'+toDate+'"';
    // query = 'select * from testimonial where status=' + 0;
    db.query(query, (err, result, field) => {
      console.log('----- blogs detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

function getTestimonialTodayDateServices (fromDate) {
  console.log('====== from date', fromDate)
  return new Promise((resolve, reject) => {
    query = 'select * from testimonial where status='+0+' && DATE(created_at)=DATE(NOW())';
    // query = 'select * from testimonial where status=' + 0;
    db.query(query, (err, result, field) => {
      console.log('----- blogs detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// the update testimonial detail
function updateTestimonialServices(testimonialParamsId, testimonialFile, testimonialContent, testimonialUpdateId) {
  console.log('=========== services ====== params ==updated_by=== ', testimonialParamsId.id)
  console.log('=========== services ====== file ===== ', testimonialFile)
  console.log('=========== services ====== testimonial detial ===== ', testimonialContent)
  console.log('===========updated by user id jwttoken ===============', testimonialUpdateId)
  return new Promise((resolve, reject) => {
    console.log('========== promis inside =======')
    console.log('--------the file --------', testimonialFile)
    queryUpdate = 'UPDATE testimonial set client_name="' + testimonialContent.clientName + '" , message="' + testimonialContent.message + '" , ratings="' + testimonialContent.ratings + '" ,  updated_by=' + testimonialUpdateId + ' where id=' + testimonialParamsId.id;
    console.log('============== the query of data ===============', queryUpdate)
    db.query(queryUpdate, (err, result, field) => {
      console.log('---------- result of data----------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// the delete testimonial detail
function deleteTestimonialServices(testimonialParamsId, testimonialUpdatedId) {
  console.log('========= the updated id of user ==========', testimonialUpdatedId)
  return new Promise((resolve, reject) => {
    queryDelete = 'UPDATE testimonial set status=' + true + ' , updated_by="' + testimonialUpdatedId + '" where id=' + testimonialParamsId.id;
    console.log('======', queryDelete)
    db.query(queryDelete, (err, result, field) => {
      console.log('----- testimonial detial db ------', result)
      if (err)
        reject('error')
      resolve(result)
    })
  })
}









// ============================================ popup
// the insert popup data 
function insertPopupTestServices(popupFile, popupContent, popupCreateTokenId) {
  console.log('=========== services ====== file name ===== ', popupFile)
  console.log('=========== services ====== detail ===== ', popupContent)
  console.log('========== create id =============', popupCreateTokenId)
  return new Promise((resolve, reject) => {
    console.log('========== promis inside =======')
    console.log('--------the file --------', popupFile)
    queryInsert = 'INSERT INTO popup (member_name, active, created_by) VALUES("' + popupContent.memberName + '" ,' + popupContent.actived + ', ' + popupCreateTokenId + ')';
    console.log('============== the query of data ===============', queryInsert)
    db.query(queryInsert, (err, result, field) => {
      console.log('---------- result of data----------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// the get popup data
function getPopupTestServices() {
  return new Promise((resolve, reject) => {
    query = 'select * from popup where status=' + 0;
    db.query(query, (err, result, field) => {
      console.log('----- popup detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

function getPopupTestParticularDateServices (fromDate ,toDate) {
  return new Promise((resolve, reject) => {
    query = 'select * from popup where status='+0+' && created_at>="'+fromDate+'" && created_at<="'+toDate+'"';
    // query = 'select * from popup where status=' + 0;
    db.query(query, (err, result, field) => {
      console.log('----- popup detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

function getPopupTestTodayDateServices (fromDate) {
  console.log('====== from date', fromDate)
  return new Promise((resolve, reject) => {
    query = 'select * from popup testimonial where status='+0+' && DATE(created_at)=DATE(NOW())';
    // query = 'select * from popup where status=' + 0;
    db.query(query, (err, result, field) => {
      console.log('----- popup detial db ------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}
// the update popup data
function updatePopupTestServices(popupParamsId, popupFile, popupContent, popupUpdateId) {
  console.log('=========== services ====== params ==updated_by=== ', popupParamsId.id)
  console.log('=========== services ====== file ===== ', popupFile)
  console.log('=========== services ====== popup detial ===== ', popupContent)
  console.log('===========updated by user id jwttoken ===============', popupUpdateId)
  return new Promise((resolve, reject) => {
    console.log('========== promis inside =======')
    console.log('--------the file --------', popupFile)
    queryUpdate = 'UPDATE popup set member_name="' + popupContent.memberName + '" , active=' + popupContent.actived + ' ,  updated_by=' + popupUpdateId + ' where id=' + popupParamsId.id;
    console.log('============== the query of data ===============', queryUpdate)
    db.query(queryUpdate, (err, result, field) => {
      console.log('---------- result of data----------', result)
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

// the delete of popup detail
function deletePopupTestServices(popupParamsId, popupUpdatedId) {
  console.log('========= the updated id of user ==========', popupUpdatedId.id)
  return new Promise((resolve, reject) => {
    queryDelete = 'UPDATE popup set status=' + true + ' , updated_by="' + popupUpdatedId + '" where id=' + popupParamsId.id;
    console.log('======', queryDelete)
    db.query(queryDelete, (err, result, field) => {
      console.log('----- popup detial db ------', result)
      if (err)
        reject('error')
      resolve(result)
    })
  })
}

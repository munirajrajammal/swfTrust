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
};

  //  ============================================================ scholarship

  //  insert the scholarship detail
  function insertScholarshipServices (file, body, create_id) {
    console.log('=========== services ====== file name ===== ', file.filename)
    console.log('=========== services ====== content ===== ', body)
    console.log('========== create id =============', create_id)
    return new Promise((resolve, reject) => {
      console.log('========== promis inside =======')
      console.log('--------the file --------',file)
      queryInsert = 'INSERT INTO scholarship(name, email, amount, members, file_name, status, created_by) VALUES("' + body.name +'" ,"' + body.email +'","' + body.amount +'",' + body.members +',"' + file.filename +'",'+false+',"' + create_id +'")';
      console.log('============== the query of data ===============', queryInsert)
      db.query(queryInsert, (err, result, field) => {
        console.log('---------- result of data----------', result)
        if(err)
          reject("error")
        resolve(result)
      })
    })
  }

  // get the scholarship detial
  function getScholarshipServices () {
    return new Promise((resolve, reject) => {
      query = 'select * from scholarship where status='+0;
      db.query(query, (err, result, field) => {
        console.log('----- scholarship detial db ------', result)
        if (err)
          reject("error")
        resolve(result)
      })
    })
  }

  // update the scholarship detial
  function updateScholarshipServices (params, files, scholarshipDetail , updated_by) {
    console.log('=========== services ====== params ===== ', params.id)
    console.log('=========== services ====== file ===== ', files.filename)
    console.log('=========== services ====== scholarship detial ===== ', scholarshipDetail)
    console.log('===========updated by user id jwttoken ===============', updated_by)
    return new Promise((resolve, reject) => {
      console.log('========== promis inside =======')
      console.log('--------the file --------',files)
      queryUpdate = 'UPDATE scholarship set name="'+scholarshipDetail.name+'" , email="'+scholarshipDetail.email+'" , amount='+scholarshipDetail.amount+' , members='+scholarshipDetail.members+' , file_name="'+files.filename+'", updated_by="'+updated_by+'" where id='+params.id;
      console.log('============== the query of data ===============', queryUpdate)
      db.query(queryUpdate, (err, result, field) => {
        console.log('---------- result of data----------', result)
        if(err)
          reject("error")
        resolve(result)
      })
    })
  }

  // delete the scholarship detail
  function deleteScholarshipServices (params , update_id) {
    console.log('========= the updated id of user ==========', update_id)
    return new Promise((resolve, reject) => {
      queryDelete = 'UPDATE scholarship set status='+true+' , updated_by="'+update_id+'" where id='+params.id;
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
  function insertExpenditureServices (file, body, create_id) {
    console.log('=========== services ====== file name ===== ', file.filename)
    console.log('=========== services ====== content ===== ', body)
    console.log('========== create id =============', create_id)
    return new Promise((resolve, reject) => {
      console.log('========== promis inside =======')
      console.log('--------the file --------',file)
      queryInsert = 'INSERT INTO expenditure(program_name, amount, program_date, created_by) VALUES("' + body.programName +'" ,"' + body.amount +'","' + body.programDate +'","'+create_id+'")';
      console.log('============== the query of data ===============', queryInsert)
      db.query(queryInsert, (err, result, field) => {
        console.log('---------- result of data----------', result)
        if(err)
          reject(err)
        resolve(result)
      })
    })
  }

  // get the data of expenditure details
  function getExpenditureServices () {
    return new Promise((resolve, reject) => {
      query = 'select * from expenditure where status='+0;
      db.query(query, (err, result, field) => {
        console.log('----- expenditure detial db ------', result)
        if (err)
          reject(err)
        resolve(result)
      })
    })
  }

  // update the expenditure details
  function updateExpenditureServices (expenditure_params, files , expenditure_detail , token) {
    console.log('=========== services ====== params ==updated_by=== ',expenditure_params)
    console.log('=========== services ====== file ===== ', files)
    console.log('=========== services ====== scholarship detial ===== ', expenditure_detail)
    console.log('===========updated by user id jwttoken ===============', token)
    return new Promise((resolve, reject) => {
      console.log('========== promis inside =======')
      console.log('--------the file --------',files)
      queryUpdate = 'UPDATE expenditure set program_name="'+expenditure_detail.programName+'" , amount="'+expenditure_detail.amount+'" , program_date="'+expenditure_detail.programDate+'" , updated_by="'+token+'" where id='+expenditure_params.id;
      console.log('============== the query of data ===============', queryUpdate)
      db.query(queryUpdate, (err, result, field) => {
        console.log('---------- result of data----------', result)
        if(err)
          reject("error")
        resolve(result)
      })
    })
  }

  // delete of expenditure detail use id
  function deleteExpenditureServices (expenditure_params, expenditure_update_id) {
    console.log('========= the updated id of user ==========', expenditure_update_id)
    return new Promise((resolve, reject) => {
      queryDelete = 'UPDATE expenditure set status='+true+' , updated_by="'+expenditure_update_id+'" where id='+expenditure_params.id;
      console.log('======', queryDelete)
      db.query(queryDelete, (err, result, field) => {
        console.log('----- scholarship detial db ------', result)
        if (err)
          reject('error')
        resolve(result)
      })
    })
  }
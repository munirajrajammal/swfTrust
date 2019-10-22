module.exports = {

  // file upload and insert
  insertScholarshipServices,
  getScholarshipServices,
  updateScholarshipServices,
  deleteScholarshipServices,
  
};

  //  insert the scholarship detail

  function insertScholarshipServices (file, body) {
    console.log('=========== services ====== file name ===== ', file.filename)
    console.log('=========== services ====== content ===== ', body)
    return new Promise((resolve, reject) => {
      console.log('========== promis inside =======')
      console.log('--------the file --------',file)
      queryInsert = 'INSERT INTO scholarship(name, email, amount, members, file_name, status) VALUES("' + body.name +'" ,"' + body.email +'","' + body.amount +'",' + body.members +',"' + file.filename +'",'+false+')';
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

  function updateScholarshipServices (params, files, scholarshipDetail) {
    console.log('=========== services ====== params ===== ', params.id)
    console.log('=========== services ====== file ===== ', files.filename)
    console.log('=========== services ====== scholarship detial ===== ', scholarshipDetail)
    return new Promise((resolve, reject) => {
      console.log('========== promis inside =======')
      console.log('--------the file --------',files)
      queryUpdate = 'UPDATE scholarship set name="'+scholarshipDetail.name+'" , email="'+scholarshipDetail.email+'" , amount='+scholarshipDetail.amount+' , members='+scholarshipDetail.members+' , file_name="'+files.filename+'" where id='+params.id;
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

  function deleteScholarshipServices (params) {
    return new Promise((resolve, reject) => {
      queryDelete = 'UPDATE scholarship set status='+true+' where id='+params.id;
      db.query(queryDelete, (err, result, field) => {
        console.log('----- scholarship detial db ------', result)
        if (err)
          reject("error")
        resolve(result)
      })
    })
  }
module.exports = {

  // file upload and insert
  fileUploaded,
  
};

  //  --------------the file uplaod and insrt 

  function fileUploaded (file, body) {
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
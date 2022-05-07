const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({



    // name,userId,password,email,createdAt,updatedAt,userType

     name : {
         type : String,
         required : true
     },
     userId : {
         type : String,
         required : true,
         unique : true
     },
     userType : {
         type : String,
         required : true,
         default : "STUDENT"
     },
     password : {
         type : String,
         required : true
     },
      jobId : {
          type : 10,
          required : true,
          unique : true
      },
     email : {
         type : String,
         required : true,
         lowercase : true,
         minilength : 10,
         unique : true
     },
     createdAt : {
         type : Date,
         immutable : true,
         default : ()=>{
             return Date.now();
         }
     },
     updatedAt : {
         type : Date,
         default : ()=>{
             return Date.now();
         }
     }
});

module.exports = mongoose.model("User", userSchema);

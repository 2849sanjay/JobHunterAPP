const mongoose = require("mongoose");
const constants = require("../utils/constants");

const companySchema = new mongoose.Schema({



    name : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
},
companyId : {
    type : 10,
    required : true,
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
    },
verified : {
    type : String,
    default : constants.verificationStatus.notVerified 
},
jobPosted : {
    type : [mongoose.schemaTypes.ObjectId];
    ref : "Job"
},










})





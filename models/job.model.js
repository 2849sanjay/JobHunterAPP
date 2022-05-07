const mongoose = require("mongoose");
const constants = require("../utils/constants");

const jobSchema = new mongoose.Schema({


title : {
    type : String,
    required : true
},
description : {
    type : String,
    required : true
},
jobId : {
    type : String,
    required : true,
    unique : true
},
status : {
    type : String,
    default : constants.jobStatus.active.expire   
},
students : {
    type : [mongoose.SchemaType.objectId],
    ref : User
},
companyId : {
    type : mangoose.SchemaTypes.ObjectsId,
    ref : "Company"
}
});

module.exports = mongoose.model("job", userSchema);
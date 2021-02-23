const mongoose = require('mongoose');

const devSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required.']
    },
    bio: {
        type:String,
        required:true
    },
    skills:{
        type:[String],
    },
    type:{
        type:String
    }

})

const Dev = mongoose.model("Dev", devSchema)

module.exports=Dev;
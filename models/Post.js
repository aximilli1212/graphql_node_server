const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    imgUrl:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    categories:{
        type:[String],
        required:true,
    },
    createdDate:{
        type:Date,
        default:Date.now
    },
    likes:{type:String},
    createdBy:{type:String},
    messages:[{
    }]
});

module.exports = mongoose.model('User', UserSchema);
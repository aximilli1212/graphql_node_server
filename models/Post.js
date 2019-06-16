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
    likes:{type:Number,
           default:0,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    messages:[{
        messageBody:{
            type:String,
            required:true,

        },
        messageDate:{
            type:Date,
            default:Date.now,
        },
        messageUser:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
    }]
});

module.exports = mongoose.model('Posts', PostSchema);
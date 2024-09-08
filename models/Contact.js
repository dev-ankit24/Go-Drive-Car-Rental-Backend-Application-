const  mongoose = require("mongoose")

const ContactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true , "Name Field Is Required "]
    },
    email:{
        type:String,
        required:[true, "Email Field Is Required "]
    },
    phone:{
        type:Number,
        required:[true, "Phone Number Is Required"]
    },
    subject:{
        type:String,
        required:[true, "Subject Field Is Required"]
    },
    active:{
        type:Boolean,
        default : true
    },
    date:{
        type:String,
    },
    message:{
        type:String,
        required:[true, "Message Field Is Required"]
    }
})

const Contact = mongoose.model("Contact",ContactSchema)

module.exports =Contact  
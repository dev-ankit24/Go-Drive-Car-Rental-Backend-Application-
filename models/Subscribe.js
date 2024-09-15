const mongoose = require("mongoose")

const SubscribeSchema = mongoose.Schema({
    email:{
        type:String,
        required:[true, "Email Is Required"]
    }
})

const Subscribe = new mongoose.model("Subscribe",SubscribeSchema)

module.exports=Subscribe
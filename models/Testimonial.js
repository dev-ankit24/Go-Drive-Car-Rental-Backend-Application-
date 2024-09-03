const mongoose =require("mongoose")

const TestimonialSchema =mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name Fields is Required "]
    },
    message:{
        type:String,
        required:[true, "Message Feild is Required"]
    },
    pic:{
        type:String,

    },
    active:{
        type:Boolean,
        default:true
    }
})

const Testimonial =new mongoose.model("Testimonial",TestimonialSchema)
module.exports=Testimonial 
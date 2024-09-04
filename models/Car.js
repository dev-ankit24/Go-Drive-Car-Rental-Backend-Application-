const mongoose =require("mongoose")

const CarSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true , "Name Field Is Required"]
    },
    rating:{
        type:Number,
        required:[true, "Rating Is Required"]
    },
    seat:{
        type:Number,
        required:[true,"Seat Field Is Required"]
    },
    mode:{
        type:String,
        required:[true,"Mode Field Is Required"]
    },
    fuelType:{
        type:String,
        required:[true, "Fuel Mode Is Required"]
    }
})

const Car = new mongoose.model("Car", CarSchema)
module.exports=Car
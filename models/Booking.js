const  mongoose = require("mongoose")
const { PricingV2TrunkingCountryInstanceTerminatingPrefixPrices } = require("twilio/lib/rest/pricing/v2/voice/country")

const BookingSchema = mongoose.Schema({
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
    carType:{
        type:String,
        required:[true, "Cars Field Is Required"]
    },
    pickUpLocation:{
        type:String,
        required:[true, " PickUp Field Is Required"]
    },
    dropOff:{
        type:String,
        required:[true, "DropOff Field Is Required"]
    },
    pickUpDate:{
        type:String,
        required:[true, "PickUp Date Field Is Required"]
    },

    active:{
        type:Boolean,
        default : true
    },
    Date:{
        type:String,
    }
})

const Booking = mongoose.model("Booking",BookingSchema)

module.exports =Booking  
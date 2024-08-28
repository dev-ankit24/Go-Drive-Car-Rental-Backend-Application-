const mongoose=require("mongoose")
let userSchema = mongoose.Schema({
    name:{
         type:String,
         required:[true, "Name field is mandatory"]
    },
    username:{
        type:String,
        unique:true,
        required:[true, "user name  field is Mondatory"]
    },
    email:{
        type:String,
        unique:true,
        required:[true , "Email field is Mondatory"]
    },
    phone:{
        type:String,
        required:[true,"Phone field is Mondatory"]
    },
    password:{
        type:String,
        required:[true,"Password field is Mondatory"]
    },
    otp:{
        type:String
    },
    pic:{
        type:String
    },
    role:{
        type:String,
        default:"admin"
    }
})

const User = new mongoose.model("User", userSchema)

module.exports=User 
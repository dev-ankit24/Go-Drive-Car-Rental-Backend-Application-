
var passwordValidator = require('password-validator');

var schema = new passwordValidator();

// Add properties to it
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase(1)                              // Must have uppercase letters
.has().lowercase(1)                              // Must have lowercase letters
.has().digits(1)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

const User  = require("../../models/User")

async function home(req,res){
  try {
    let data= await User.find().sort({_id:-1})
    res.render("admin/user/index",{title:"User Home ",data:data} )

  } catch (error) {
     console.log(error);
      
  }
}

// create data and store data in mongodb and validations

function create(req, res){
    res.render("admin/user/create",{title:"User Create", data:{}, error:{}})
}

async function store(req,res) {
    try {
        var data= new User(req.body)
       if(req.body.password === req.body.cpassword){
        if(schema.validate(req.body.password)){
            await data.save()
            res.redirect("/admin/users")
            console.log("savedata:",data);
            
        }
        else{
            res.render("admin/user/create",{
                errorMessage:{
                    password:"Password length must be 1 character 1 digit 1 special character "
                },data:data
            })
        }
       }
       else{
        res.render("admin/user/create",{
            errorMessage:{
                password:"Password or Confirm do not Matched "
            },data:data
        })
       }
    } catch (error) {
        console.log(error );
        errorMessage={}
        error.keyValue && error.keyValue.username?(errorMessage["username"]="UserName is Already Taken"):""
        error.keyValue && error.keyValue.email?(errorMessage["email"]="Email is Already Taken"):""
        error.keyValue&& error.keyValue.phone?(errorMessage["phone"]="Phone is Already Taken"):""
        error.errors?.name ?(errorMessage["name"]=error.errors?.name.message):""
        res.render("admin/user/create",{errorMessage:errorMessage, data:data})       
    }
}

//  delete user data
async function remove(req,res){
    try {
        let data = await User.findOne({_id:req.params._id})
       await data.deleteOne()
        res.redirect("/admin/users")
    } catch (error) {
        console.log(error);
        res.redirect("/admin/users")
    }
}

// ------------------------------------------------------------------------
//  edit or update data 

async function edit(req, res){
    try {
        let data = await User.findOne({_id:req.params._id})
        res.render("admin/user/edit",{title:" Admin User Edit Section ", data:data , error:{}})
    } catch (error) {
        console.log(error);
        res.redirect("/admin/users")
        
    }
}
 
async function update(req,res){
    try {
        var data= await User.findOne({_id:req.params._id})
        data.name= req.body.name
        data.username=req.body.username
        data.email= req.body.email
        data.phone= req.body.phone
        data.role = req.body.role
        await data.save()
         res.redirect("/admin/users")
    } catch (error) {
        errorMessage={}
        console.log(error);
        error.keyValue && error.keyValue.name?(errorMessage["name"]="Name is already taken") :""
        error.keyValue && error.keyValue.username?(errorMessage["username"]="username is already taken") :""
        error.keyValue && error.keyValue.email?(errorMessage["email"]="email is already taken") :""
        error.keyValue && error.keyValue.phone?(errorMessage["phone"]="phone is already taken") :""
        render("admin/user/edit",{errorMessage:errorMessage , data:data })
        
        
    }

}
module.exports={home,create, store, remove , edit,update}
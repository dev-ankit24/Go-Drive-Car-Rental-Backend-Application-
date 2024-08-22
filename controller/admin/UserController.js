
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

function home(req,res){
    res.render("admin/user/index",{title:"User Home "} )
}
function create(req, res){
    res.render("admin/user/create",{title:"User Create", error:{}})
}

async function store(req,res) {
   
    try {
       if(req.body.password === req.body.cpassword){
         var data= new User(req.body)
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
        error.errors?.name ?(errorMessage["name"]=error.errors?.name.message):""
        error.errors?.username ?(errorMessage["username"]=error.errors?.username.message):""
        error.errors?.email? (errorMessage["email"]=error.errors?.email.message):""
        error.errors?.phone? (errorMessage["phone"]=error.errors?.phone.message):""
        res.render("admin/user/create",{errorMessage:errorMessage, data:data})       
    }
}
module.exports={home,create, store}
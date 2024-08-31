const hbs =require ("hbs")
const User = require("../models/User")

hbs.registerHelper("isLogin", function(session){
    return session && session .login ?true: false

})

hbs.registerHelper("userName",(session)=>{
    return session && session.login? session.name:""
})

// user selected admin or superAdmin 
hbs.registerHelper("checkRole", (selectedRole, role)=>{
    return  selectedRole == role ? "selected ":""
})

// used to user profile show or not 
hbs.registerHelper("isSuperAdmin", (session)=>{
return session  && session.role ==="Super Admin" ?  true :false
})
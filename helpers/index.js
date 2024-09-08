const hbs =require ("hbs")
const User = require("../models/User")

hbs.registerHelper("isLogin", function(session){
    return session && session .login ?true: false

})

hbs.registerHelper("userName",(session)=>{
    return session && session.login? session.name:""
})

// user selected admin or superAdmin 
hbs.registerHelper("checkDropDown", (selected, option)=>{
    return  selected == option ? "selected ":""
})


// // Testimonial check active 
// hbs.registerHelper("checkActive", (selectedStatus, status)=>{
//     return  selectedStatus == status ? "selected ":""
// })

// used to user profile show or not 
hbs.registerHelper("isSuperAdmin", (session)=>{
return session  && session.role ==="Super Admin" ?  true :false
})

// date helper 
hbs.registerHelper("getdate",(date)=>{
    return new Date(date).toLocaleDateString()
})
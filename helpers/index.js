const hbs =require ("hbs")

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
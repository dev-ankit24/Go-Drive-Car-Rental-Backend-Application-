const hbs =require("hbs")

hbs.registerHelper("isLogin", function(){
    let login=localStorage.getItem("login") ?? false
    return login;
})

hbs.registerHelper("adminName",()=>{
    return localStorage.getItem("name")??""
})

// user selected admin or superAdmin 
hbs.registerHelper("checkRole", (selectedRole, role)=>{
    return  selectedRole == role ? "selected ":""
})
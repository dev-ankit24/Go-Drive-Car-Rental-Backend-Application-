const hbs =require("hbs")

hbs.registerHelper("isLogin", function(option){
    let login=localStorage.getItem("login") ?? false
    return login;
})

hbs.registerHelper("adminName",(option)=>{
    return localStorage.getItem("name")??""
})
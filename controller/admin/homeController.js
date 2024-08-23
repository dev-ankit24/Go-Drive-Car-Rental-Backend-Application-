function home(req,res){
    res.render("admin/home/index",{title:"Admin Home"})
}

// login controller
 function login(req,res){
    res.render("admin/home/login",{title:"Admin Login "})
 }

 function loginStore(req,res){
    res.render("admin/home/login",{title:"Admin Login "})
 }
module.exports={home,login,loginStore}
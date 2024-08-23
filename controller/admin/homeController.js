function home(req,res){
    res.render("admin/home/index",{title:"Admin Home"})
}

// login 
 function login(req,res){
    res.render("admin/home/login",{title:"Admin Login "})
 }

module.exports={home,login}
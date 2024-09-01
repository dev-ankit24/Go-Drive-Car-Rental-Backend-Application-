function superAdminChecker(req,res,next){
    if(req.session && req.session.role ==="Super Admin" ){
        next()
    }
    else if(req.session && req.session.login){
        res.redirect("/404")
    }
    else res.redirect("/admin/login")
    // console.log("super error");
    
}

function isLogin(req,res,next){
    if(req.session && req.session.login){
        next()
    }
    else
         res.redirect("/admin/login")
    // console.log("islogin error ");
    
}


module.exports={
    isLogin, superAdminChecker
}
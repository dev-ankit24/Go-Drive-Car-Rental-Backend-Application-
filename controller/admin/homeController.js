function home(req,res){
    res.render("admin/home/index",{title:"Admin Home"})
}

// login controller
 function login(req,res){
    res.render("admin/home/login",{title:"Admin Login "})
 }

 async function loginStore(req,res){
   try {
      let data= await User.find({$and:[
         {$or:[
            {username:req.body.username},
            {email:req.body.email}
         ]},
         {password:req.body.password}
      ]})
      if(data){
         req.session.login=true
         req.session.name=data.name
         req.session.userid=data.userid
         res.redirect("/admin")
      }
      else{
         res.render("admin/home/login",{title:"Admin Login"})
      }
   } catch (error) {
      console.log(error);
   }
 }
module.exports={home,login,loginStore}
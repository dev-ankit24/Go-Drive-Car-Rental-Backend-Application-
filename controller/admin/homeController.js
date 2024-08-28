const User =require("../../models/User")

async function home(req,res){
   try {
      let data= await User.findOne({_id:req.session.userid})
      if(data){
      res.render("admin/home/index",{ session:req.session, title:"Admin Home", data:data})
      }
      else{
         res.redirect("/admin/login")
      }
   } catch (error) {
      console.log(error)
   }
    
}

// login controller
 function login(req,res){
    res.render("admin/home/login",{ session:req.session, title:"Admin Login "})
 }

async function loginStore(req,res){
   try {
      let data = await User.findOne({
         $and:[
            {
               $or:[
                  {username: req.body.username},
                  {email: req.body.username}
               ]
            },
            {password: req.body.password}
         ]
      })
      if(data){
         req.session.login = true
         req.session.name =data.name 
         req.session.userid =data.id 
         res.redirect("/admin")
      }
      else{
         res.render("admin/home/login", { session:req.session, title:"Admin Login error "})
      }
   } catch (error) {
      console.log(error);
      
   }
}

//  Logout controller

function logout(req,res){
   req.session.destory("login")
   req.session.destory("name")
   req.session.destory("userid")
   res.redirect("/admin/login")

}
module.exports={home,login,loginStore,logout}
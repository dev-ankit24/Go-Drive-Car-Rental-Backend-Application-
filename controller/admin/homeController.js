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

      }
   } catch (error) {
      console.log(error);
      
      res.render("admin/home/login",{
         title:"Admin Login",
         data:data,

      })
   }
 }
module.exports={home,login,loginStore}
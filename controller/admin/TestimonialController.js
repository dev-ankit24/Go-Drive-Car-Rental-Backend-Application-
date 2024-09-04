

const Testimonial  = require("../../models/Testimonial")

async function home(req,res){
  try {
    let data= await Testimonial.find().sort({_id:-1})
    res.render("admin/testimonial/index",{ session:req.session ,title:"Testimonial Home ",data:data} )

  } catch (error) {
     console.log(error);
      
  }
}

// create data and store data in mongodb and validations

function create(req, res){
    res.render("admin/testimonial/create",{ session:req.session ,title:"Testimonial Create", data:{}, error:{}})
}

async function store(req,res) {
    try {
        var data= new Testimonial(req.body)
       if(req.body.password === req.body.cpassword){
        if(schema.validate(req.body.password)){
            await data.save()
            res.redirect("/admin/testimonials")
            console.log("savedata:",data);
            
        }
        else{
            res.render("admin/testimonial/create",{
                title:"Testimonial Create",
                errorMessage:{
                    password:"Password length must be 1 character 1 digit 1 special character "
                },data:data
            }) 
        }
       }
       else{
        res.render("admin/testimonial/create",{
            title:"Testimonial Create",
            errorMessage:{
                password:"Password or Confirm do not Matched "
            },data:data
        })
       }
    } catch (error) {
        console.log(error );
        errorMessage={}
        error.keyValue && error.keyValue.name?(errorMessage["name"]="Name is Already Taken"):""
        error.keyValue && error.keyValue.message?(errorMessage["message"]="message is Already Taken"):""
        error.keyValue&& error.keyValue.pic?(errorMessage["pic"]="pic is Already Taken"):""
        res.render("admin/testimonial/create",{errorMessage:errorMessage, data:data ,title:"Testimonial Create"})       
    }
}

//  delete user data
async function remove(req,res){
    try {
        let data = await Testimonial.findOne({_id:req.params._id})
       await data.deleteOne()
        res.redirect("/admin/testimonials")
    } catch (error) {
        console.log(error);
        res.redirect("/admin/testimonials")
    }
}

// ------------------------------------------------------------------------
//  edit or update data 

async function edit(req, res){
    try {
        let data = await Testimonial.findOne({_id:req.params._id})
        res.render("admin/testimonial/edit",{title:" Admin User Edit Section ", data:data , error:{}})
    } catch (error) {
        console.log(error);
        res.redirect("/admin/testimonials")
        
    }
}
 
async function update(req,res){
    try {
        var data= await Testimonial.findOne({_id:req.params._id})
        data.name= req.body.name
        data.username=req.body.username
        data.email= req.body.email
        data.phone= req.body.phone
        data.role = req.body.role
        await data.save()
         res.redirect("/admin/testimonials")
    } catch (error) {
        console.log(error);
        
        errorMessage={}
        error.keyValue && error.keyValue.name?(errorMessage["name"]="Name is Already Taken"):""
        error.keyValue && error.keyValue.message?(errorMessage["message"]="message is Already Taken"):""
        error.keyValue&& error.keyValue.pic?(errorMessage["pic"]="pic is Already Taken"):""
        render("admin/testimonial/edit",{errorMessage:errorMessage , data:data ,title:"Testimonial Create"})
        
        
    }

}
module.exports={home,create, store, remove , edit,update}
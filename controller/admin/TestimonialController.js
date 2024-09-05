

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
            if(req.file){
                data.pic=req.file.path
            }
            await data.save()
            res.redirect("/admin/testimonial")
            console.log("savedata:",data);

    } catch (error) {
        console.log(error );
        errorMessage={}
        error.keyValue && error.keyValue.name?(errorMessage["name"]=error.errors?.name.message):""
        error.keyValue && error.keyValue.message?(errorMessage["message"]=error.errors?.message.message):""
        error.keyValue&& error.keyValue.pic?(errorMessage["pic"]=error.errors?.pic.message):""
        // console.log(error.errors.name.message)
        res.render("admin/testimonial/create",{errorMessage:errorMessage, data:data ,title:"Testimonial Create Section"})       
    }
}

//  delete user data
async function remove(req,res){
    try {
        let data = await Testimonial.findOne({_id:req.params._id})
       await data.deleteOne()
        res.redirect("/admin/testimonial")
    } catch (error) {
        console.log(error);
        res.redirect("/admin/testimonial")
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
        data.message= req.body.message
        data.active = req.body.active
        // data.pic =  req.body.pic
        if(req.file){
            try {
                const fs =require('fs')
                fs.unlinkSync(data.pic)
            } catch (error) {}
            data.pic = req.file.path
        }
        await data.save()
        res.redirect("/admin/testimonial")
    } catch (error) {
        console.log(error);
        
        errorMessage={}
        error.keyValue && error.keyValue.name?(errorMessage["name"]="Name is Already Taken"):""
        error.keyValue && error.keyValue.message?(errorMessage["message"]="message is Already Taken"):""
        error.keyValue&& error.keyValue.pic?(errorMessage["pic"]="pic is Already Taken"):""
        res.render("admin/testimonial/edit",{errorMessage:errorMessage , data:data ,title:"Testimonial Create"})
        
        
    }

}
module.exports={home,create, store, remove , edit,update}
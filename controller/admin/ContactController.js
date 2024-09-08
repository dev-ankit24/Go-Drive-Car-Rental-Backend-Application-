

const Contact  = require("../../models/Contact")

async function home(req,res){
  try {
    let data= await Contact.find().sort({_id:-1})
    res.render("admin/contact/index",{ session:req.session ,title:" Contact Home ",data:data} )

  } catch (error) {
     console.log(error);
      
  }
}


//  delete user data
async function remove(req,res){
    try {
        let data = await Contact.findOne({_id:req.params._id})
       await data.deleteOne()
        res.redirect("/admin/contact")
    } catch (error) {
        console.log(error);
        res.redirect("/admin/contact")
    }
}

// ------------------------------------------------------------------------
//  edit  data 

async function edit(req, res){
    try {
        let data = await Contact.findOne({_id:req.params._id})
        res.render("admin/contact/edit",{title:" Admin User Edit Section ", data:data , error:{}})
    } catch (error) {
        console.log(error);
        res.redirect("/admin/contact")
        
    }
}

//  Show data 

async function show(req, res){
    try {
        let data = await Contact.findOne({_id:req.params._id})
        res.render("admin/contact/show",{title:" Contact Query", data:data , })
    } catch (error) {
        console.log(error);
        res.redirect("/admin/contact")
        
    }
}
 

module.exports={home, remove , edit,show}
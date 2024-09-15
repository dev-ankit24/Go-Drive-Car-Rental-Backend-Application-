

const Booking  = require("../../models/Booking")

async function home(req,res){
  try {
    let data= await Booking.find().sort({_id:-1})
    res.render("admin/booking/index",{ session:req.session ,title:" Booking Home ",data:data} )

  } catch (error) {
     console.log(error);
      
  }
}


//  delete user data
async function remove(req,res){
    try {
        let data = await Booking.findOne({_id:req.params._id})
       await data.deleteOne()
        res.redirect("/admin/booking")
    } catch (error) {
        console.log(error);
        res.redirect("/admin/booking")
    }
}

// ------------------------------------------------------------------------
//  edit  data 

async function edit(req, res){
    try {
        let data = await Booking.findOne({_id:req.params._id})
        data.active =false
        await data.save()
        res.render("admin/booking/show",{title:" Query Section ", data:data  })
    } catch (error) {
        console.log(error);
        res.redirect("/admin/booking")
        
    }
}

//  Show data 

async function show(req, res){
    try {
        let data = await Booking.findOne({_id:req.params._id})
        res.render("admin/booking/show",{title:" Booking Query", data:data , })
    } catch (error) {
        console.log(error);
        res.redirect("/admin/booking")
        
    }
}
 

module.exports={home, remove , edit,show}
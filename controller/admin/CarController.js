

const Car  = require("../../models/Car")

async function home(req,res){
  try {
    let data= await Car.find().sort({_id:-1})
    res.render("admin/car/index",{ session:req.session ,title:"Admin Car Home Section ",data:data} )

  } catch (error) {
     console.log(error);
      
  }
}

// create data and store data in mongodb and validations

function create(req, res){
    res.render("admin/car/create",{ session:req.session ,title:"Admin Car Create  Section ", data:{}, error:{}})
}

async function store(req,res) {
    try {
        var data= new Car(req.body)
            if(req.file){
                data.pic=req.file.path
            }
            await data.save()
            res.redirect("/admin/car")
            console.log("savedata:",data);

    } catch (error) {
        console.log(error );
        errorMessage={}
        error.keyValue && error.keyValue.name?(errorMessage["name"]=error.errors?.name.message):""
        error.keyValue && error.keyValue.rating?(errorMessage["rating"]=error.errors?.rating.message):""
        error.keyValue && error.keyValue.rent?(errorMessage["rent"]=error.errors?.rent.message):""
        error.keyValue && error.keyValue.seat?(errorMessage["seat"]=error.errors?.seat.message):""
        error.keyValue && error.keyValue.mode?(errorMessage["mode"]=error.errors?.mode.message):""
        error.keyValue && error.keyValue.fuelType?(errorMessage["fuelType"]=error.errors?.fuelType.message):""
        error.keyValue&& error.keyValue.pic?(errorMessage["pic"]=error.errors?.pic.message):""
        error.keyValue && error.keyValue.active?(errorMessage["active"]=error.errors?.active.message):""

        res.render("admin/car/create",{errorMessage:errorMessage, data:data ,title:"Car Create Section"})       
    }
}

//  delete user data
async function remove(req,res){
    try {
        let data = await Car.findOne({_id:req.params._id})
       await data.deleteOne()
        res.redirect("/admin/car")
    } catch (error) {
        console.log(error);
        res.redirect("/admin/car")
    }
}

// ------------------------------------------------------------------------
//  edit or update data 

async function edit(req, res){
    try {
        let data = await Car.findOne({_id:req.params._id})
        res.render("admin/car/edit",{title:"Car Edit Section ", data:data , error:{}})
    } catch (error) {
        console.log(error);
        res.redirect("/admin/car")
        
    }
}
 
async function update(req,res){
    try {
        var data= await Car.findOne({_id:req.params._id})
        data.name= req.body.name
        data.active = req.body.active
        data.rent = req.body.rent
        data.rating = req.body.rating
        data.seat = req.body.seat
        data.mode = req.body.mode
        data.fuelType= req.body.fuelType
        if(req.file){
            try {
                const fs =require('fs')
                fs.unlinkSync(data.pic)
            } catch (error) {}
            data.pic = req.file.path
        }
        await data.save()
        res.redirect("/admin/car", {title:"Admin Car Update/Edit Section"})
    } catch (error) {
        console.log(error );
        errorMessage={}
        error.keyValue && error.keyValue.name?(errorMessage["name"]=error.errors?.name.message):""
        error.keyValue && error.keyValue.rating?(errorMessage["rating"]=error.errors?.rating.message):""
        error.keyValue && error.keyValue.rent?(errorMessage["rent"]=error.errors?.rent.message):""
        error.keyValue && error.keyValue.seat?(errorMessage["seat"]=error.errors?.seat.message):""
        error.keyValue && error.keyValue.mode?(errorMessage["mode"]=error.errors?.mode.message):""
        error.keyValue && error.keyValue.fuelType?(errorMessage["fuelType"]=error.errors?.fuelType.message):""
        error.keyValue&& error.keyValue.pic?(errorMessage["pic"]=error.errors?.pic.message):""
        error.keyValue && error.keyValue.active?(errorMessage["active"]=error.errors?.active.message):""

        res.render("admin/car/edit",{errorMessage:errorMessage , data:data ,title:"Car Create"})
        
        
    }

}
module.exports={home,create, store, remove , edit,update}
const Testimonial = require("../models/Testimonial")
 const Car = require("../models/Car")
 
 
 async function homePage(req,res){
    try {
        let testimonials= await Testimonial.find().sort({_id:1})
        const cars = await Car.find().sort({_id:1})
        res.render("index",{testimonials:testimonials, cars:cars})
    } catch (error) {
        console.log(error );
        
    }
}

function aboutPage(req,res){
    res.render("aboutPage",{session:req.session, title:"About Us"})
}

function servicePage(req,res){
    res.render("servicePage",{session:req.session, title:"Services"})
}

function featurePage(req,res){
    res.render("featurePage",{session:req.session, title:"Features"})
}

async function carsPage(req,res){
    try {
       const cars= await Car.find().sort({_id:1}) 
       res.render("carsPage",{session:req.session, title:"Cars", cars:cars})
    } catch (error) {
        console.log(error);
    }
 }

async function testimonialPage(req,res){
    try {
        const testimonials = await Testimonial.find().sort({_id:1}) 
       res.render("testimonialPage",{session:req.session, title:"Testimonials" , testimonials:testimonials})

    } catch (error) {
        console.log(error);
        
    }
}

function contact(req,res){
    res.render("contact",{session:req.session, title:"Contact Us"})
}

function eroor404(req,res){
    res.render("404",{session:req.session, title:"404 Page Not Found !"})
}

module.exports={
    homePage,
    aboutPage,
    carsPage,
    contact,
    featurePage,
    servicePage,
    // teamPage,
    testimonialPage,
    eroor404
}
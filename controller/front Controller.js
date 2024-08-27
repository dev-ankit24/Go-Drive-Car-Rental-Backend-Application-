 function homePage(req,res){
    res.render("index")
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

function carsPage(req,res){
    res.render("carsPage",{session:req.session, title:"Cars"})
}

// function teamPage(req,res){
//     res.render("teamPage",{session:req.session, title:"Teams"})
// }

function testimonialPage(req,res){
    res.render("testimonialPage",{session:req.session, title:"Testimonials"})
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
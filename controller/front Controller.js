function homePage(req,res){
    res.render("index")
}

function aboutPage(req,res){
    res.render("aboutPage",{title:"About Us"})
}

function servicePage(req,res){
    res.render("servicePage",{title:"Services"})
}

function featurePage(req,res){
    res.render("featurePage",{title:"Features"})
}

function carsPage(req,res){
    res.render("carsPage",{title:"Cars"})
}

function teamPage(req,res){
    res.render("teamPage",{title:"Teams"})
}

function testimonialPage(req,res){
    res.render("testimonialPage",{title:"Testimonials"})
}

function contact(req,res){
    res.render("contact",{title:"Contact Us"})
}

function eroor404(req,res){
    res.render("404",{title:"404 Page Not Found !"})
}

module.exports={
    homePage,
    aboutPage,
    carsPage,
    contact,
    featurePage,
    servicePage,
    teamPage,
    testimonialPage,
    eroor404
}
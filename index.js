const express=require("express")
const hbs = require("hbs")
const app = express()

app.set("view engine","hbs")
app.use(express.static("./views/public"))

hbs.registerPartials("./views/partials")

app.get("",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("aboutPage")
})

app.get("/service",(req,res)=>{
    res.render("servicePage")
})

app.get("/feature",(req,res)=>{
    res.render("featurePage")
})

app.get("/cars",(req,res)=>{
    res.render("carsPage")
})

app.get("/team",(req,res)=>{
    res.render("teamPage")
})

app.get("/testimonials",(req,res)=>{
    res.render("testimonialPage")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.listen(8000, console.log("server is run http://localhost:8000"))
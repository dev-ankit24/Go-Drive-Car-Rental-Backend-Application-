const express=require("express")
const hbs = require("hbs")
const app = express()

const session =require("express-session")
require("dotenv").config()


app.set("view engine","hbs")
app.use(express.static("./public"))                 //this line used to set path of public folder which contains css, js, images  
app.use("/public", express.static("./public"))      // this line used to server public folder (image upload )

// session eexpress
app.use(session({
  secret: process.env.SESSION_SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

hbs.registerPartials("./views/partials")        //  this line used to hbs partials

require("./helpers/index.js")                   // this line used to helpers (local storage, ect browser features)
require("./db_connect.js")                     // this line used to connect database
 
const router=require("./routes/routes")
app.use("",router)


app.listen(8000, console.log("server is run http://localhost:8000"))


//  without MVC parttern  routes
// app.get("",(req,res)=>{
//     res.render("index")
// })

// app.get("/about",(req,res)=>{
//     res.render("aboutPage",{title:"About Us"})
// })

// app.get("/service",(req,res)=>{
//     res.render("servicePage",{title:"Services"})
// })

// app.get("/feature",(req,res)=>{
//     res.render("featurePage",{title:"Features"})
// })

// app.get("/cars",(req,res)=>{
//     res.render("carsPage",{title:"Cars"})
// })

// app.get("/team",(req,res)=>{
//     res.render("teamPage",{title:"Teams"})
// })

// app.get("/testimonials",(req,res)=>{
//     res.render("testimonialPage",{title:"Testimonials "})
// })

// app.get("/contact",(req,res)=>{
//     res.render("contact",{title:"Contact Us"})
// })

// app.get("/*",(req,res)=>{
//     res.render("404",{title:"404 Page Not Found"})
// })
// app.listen(8000, console.log("server is run http://localhost:8000"))

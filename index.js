const express=require("express")
const hbs = require("hbs")
const app = express()

app.set("view engine","hbs")
app.use(express.static("./views/public"))

hbs.registerPartials("./views/partials")

app.get("/",(req,res)=>{
    res.render("index")
})


app.listen(8000, console.log("server is run http://localhost:8000"))
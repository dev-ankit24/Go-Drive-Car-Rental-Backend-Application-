
const AdminTestimonialRouter=require("express").Router()
const {encoder} =require("../../middelware/bodyParser")


const {isLogin}  =require('../../middelware/roleCheckerMiddeware')
const {home,create, store, remove ,edit,update }=require("../../controller/admin/TestimonialController")


AdminTestimonialRouter.get("/",isLogin, home)
AdminTestimonialRouter.get("/create",isLogin, create)
AdminTestimonialRouter.post("/store",isLogin, encoder, store)
AdminTestimonialRouter.get("/delete/:_id",isLogin, encoder, remove)
AdminTestimonialRouter.get("/edit/:_id",isLogin, encoder,edit)
AdminTestimonialRouter.post("/update/:_id",isLogin, encoder,update)

module.exports =AdminTestimonialRouter
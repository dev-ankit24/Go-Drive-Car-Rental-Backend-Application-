const AdminRouter =require("express").Router()

const AdminUserRouter=require("./AdminUserRoute")
// const {homePage}=require("../../controller/admin/homeController")
const AdminHomeRouter =require( "./AdminHomeRoute")
const AdminTestimonialRouter =require( "./AdminTestimonialRoute")

AdminRouter.use("/", AdminHomeRouter)
AdminRouter.use("/users",AdminUserRouter)
AdminRouter.use("/testimonial",AdminTestimonialRouter)




module.exports=AdminRouter
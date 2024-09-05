const AdminRouter =require("express").Router()

const AdminUserRouter=require("./AdminUserRoute")
// const {homePage}=require("../../controller/admin/homeController")
const AdminHomeRouter =require( "./AdminHomeRoute")
const AdminTestimonialRouter =require( "./AdminTestimonialRoute")
const AdminCarRouter =require( "./AdminCarRoute")

AdminRouter.use("/", AdminHomeRouter)
AdminRouter.use("/users",AdminUserRouter)
AdminRouter.use("/testimonial",AdminTestimonialRouter)
AdminRouter.use("/car",AdminCarRouter)




module.exports=AdminRouter
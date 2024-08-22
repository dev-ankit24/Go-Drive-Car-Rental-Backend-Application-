const AdminRouter =require("express").Router()

const AdminUserRouter=require("./AdminUserRoute")
// const {homePage}=require("../../controller/admin/homeController")
const AdminHomeRouter =require( "./AdminHomeRoute")

AdminRouter.use("/", AdminHomeRouter)
AdminRouter.use("/users",AdminUserRouter)



module.exports=AdminRouter
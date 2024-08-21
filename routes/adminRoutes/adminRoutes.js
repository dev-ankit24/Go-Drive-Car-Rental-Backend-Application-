const AdminRouter =require("express").Router()

const AdminUserRouter=require("./AdminUserRoute")
const {homePage}=require("../../controller/admin/homeController")

AdminRouter.get("/", homePage)
AdminRouter.use("/users",AdminUserRouter)



module.exports=AdminRouter
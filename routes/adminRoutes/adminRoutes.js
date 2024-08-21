const AdminRouter =require("express").Router()

const {homePage}=require("../../controller/admin/homeController")
const {adminUserPage}=require("../../controller/admin/UserController")

AdminRouter.get("/",homePage)
AdminRouter.get("/admin/users/")

module.exports=AdminRouter
const AdminRouter =require("express").Router()

const {homePage}=require("../../controller/admin/homeController")

AdminRouter.get("/",homePage)

module.exports=AdminRouter
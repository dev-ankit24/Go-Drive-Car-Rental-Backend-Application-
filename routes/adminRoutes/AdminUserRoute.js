const AdminUserRouter=require("express").Router()

const {adminUserPage}=require("../../controller/admin/UserController")

AdminUserRouter.get("/",adminUserPage)

module.exports =AdminUserRouter
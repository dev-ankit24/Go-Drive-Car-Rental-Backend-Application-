const AdminUserRouter=require("express").Router()

const {home,create}=require("../../controller/admin/UserController")

AdminUserRouter.get("/",home)
AdminUserRouter.get("/create",create)

module.exports =AdminUserRouter
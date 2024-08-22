const  bodyParser = require("body-parser")
const AdminUserRouter=require("express").Router()

const encoder = bodyParser.urlencoded()

const {home,create, store}=require("../../controller/admin/UserController")


AdminUserRouter.get("/",home)
AdminUserRouter.get("/create",create)
AdminUserRouter.post("/store",encoder, store)

module.exports =AdminUserRouter
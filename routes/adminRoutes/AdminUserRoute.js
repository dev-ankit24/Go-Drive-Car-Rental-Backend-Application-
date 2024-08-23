const  bodyParser = require("body-parser")
const AdminUserRouter=require("express").Router()

const encoder = bodyParser.urlencoded()

const {home,create, store, remove ,edit,update}=require("../../controller/admin/UserController")


AdminUserRouter.get("/",home)
AdminUserRouter.get("/create",create)
AdminUserRouter.post("/store",encoder, store)
AdminUserRouter.get("/delete/:_id",encoder, remove)
AdminUserRouter.get("/edit/:_id",encoder,edit)
AdminUserRouter.post("/update/:_id",encoder,update)

module.exports =AdminUserRouter
const  bodyParser = require("body-parser")
const AdminUserRouter=require("express").Router()

const encoder = bodyParser.urlencoded()

const {superAdminChecker} =require('../../middelware/roleCheckerMiddeware')
const {home,create, store, remove ,edit,update }=require("../../controller/admin/UserController")


AdminUserRouter.get("/",superAdminChecker,home)
AdminUserRouter.get("/create",superAdminChecker,create)
AdminUserRouter.post("/store",superAdminChecker,encoder, store)
AdminUserRouter.get("/delete/:_id",superAdminChecker,encoder, remove)
AdminUserRouter.get("/edit/:_id",superAdminChecker,encoder,edit)
AdminUserRouter.post("/update/:_id",superAdminChecker,encoder,update)

module.exports =AdminUserRouter
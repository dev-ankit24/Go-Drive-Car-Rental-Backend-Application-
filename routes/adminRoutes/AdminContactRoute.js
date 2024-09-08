
const AdminContactRouter=require("express").Router()
const {isLogin}  =require('../../middelware/roleCheckerMiddeware')

const {home, remove ,edit,show }=require("../../controller/admin/ContactController")


AdminContactRouter.get("/",isLogin, home)
AdminContactRouter.get("/delete/:_id",isLogin, remove)
AdminContactRouter.get("/edit/:_id",isLogin,edit)
AdminContactRouter.post("/show/:_id",isLogin,show)

module.exports =AdminContactRouter
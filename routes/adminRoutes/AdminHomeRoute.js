const bodyParser= require("body-parser")
const AdminHomeRouter=require("express").Router()

const encoder= new bodyParser.urlencoded()

const {home,login, loginStore,logout} =require("../../controller/admin/homeController")

AdminHomeRouter.get("/",home)
AdminHomeRouter.get("/login",login)
AdminHomeRouter.post("/login",encoder,loginStore)
AdminHomeRouter.get("/logout",logout)

module.exports =AdminHomeRouter
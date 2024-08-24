const bodyParser= require("body-parser")
const AdminHomeRouter=require("express").Router()

const encoder= new bodyParser.urlencoded()

const {home,login, loginStore} =require("../../controller/admin/homeController")

AdminHomeRouter.get("/",home)
AdminHomeRouter.get("/login",login)
AdminHomeRouter.post("/loginStore", encoder,loginStore)

module.exports =AdminHomeRouter
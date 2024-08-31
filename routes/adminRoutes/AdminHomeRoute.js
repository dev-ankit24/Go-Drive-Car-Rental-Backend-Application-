const bodyParser= require("body-parser")
const AdminHomeRouter=require("express").Router()

const encoder= new bodyParser.urlencoded()
const {userUploader} =require("../../middelware/multerMiddleware")
const {home,login, loginStore,logout, profileUpdate,profileUpdateStore} =require("../../controller/admin/homeController")

AdminHomeRouter.get("/",home)
AdminHomeRouter.get("/login",login)
AdminHomeRouter.post("/login",encoder,loginStore)
AdminHomeRouter.get("/logout",logout)
AdminHomeRouter.get("/update-profile", profileUpdate)
AdminHomeRouter.post("/update-profile",encoder,userUploader.single('pic'), profileUpdateStore)

module.exports =AdminHomeRouter
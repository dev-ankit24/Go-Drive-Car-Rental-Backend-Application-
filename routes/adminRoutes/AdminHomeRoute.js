const AdminHomeRouter=require("express").Router()

const {encoder} = require("../../middelware/bodyParser")

const {isLogin}=require("../../middelware/roleCheckerMiddeware")
const {userUploader} =require("../../middelware/multerMiddleware")
const {home,login, loginStore,logout, profileUpdate,profileUpdateStore} =require("../../controller/admin/homeController")

AdminHomeRouter.get("/",isLogin,home)
AdminHomeRouter.get("/login",login)
AdminHomeRouter.post("/login",encoder,loginStore)
AdminHomeRouter.get("/logout",logout)
AdminHomeRouter.get("/update-profile",isLogin, profileUpdate)
AdminHomeRouter.post("/update-profile",isLogin,encoder,userUploader.single('pic'), profileUpdateStore)

module.exports =AdminHomeRouter
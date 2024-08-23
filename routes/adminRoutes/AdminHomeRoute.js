const AdminHomeRouter=require("express").Router()

const {home,login} =require("../../controller/admin/homeController")

AdminHomeRouter.get("/",home)
AdminHomeRouter.get("/login",login)

module.exports =AdminHomeRouter
const AdminHomeRouter=require("express").Router()

const {homePage}=require("../../controller/admin/homeController")

AdminHomeRouter.get("/",homePage)

module.exports =AdminHomeRouter
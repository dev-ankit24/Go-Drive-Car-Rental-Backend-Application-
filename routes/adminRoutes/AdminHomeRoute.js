const AdminHomeRouter=require("express").Router()

const {home} =require("../../controller/admin/homeController")

AdminHomeRouter.get("/",home)

module.exports =AdminHomeRouter
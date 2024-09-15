
const AdminBookingRouter=require("express").Router()
const {isLogin}  =require('../../middelware/roleCheckerMiddeware')

const {home, remove ,edit,show }=require("../../controller/admin/BookingController")


AdminBookingRouter.get("/",isLogin, home)
AdminBookingRouter.get("/delete/:_id",isLogin, remove)
AdminBookingRouter.get("/edit/:_id",isLogin,edit)
AdminBookingRouter.get("/show/:_id",isLogin,show)

module.exports =AdminBookingRouter
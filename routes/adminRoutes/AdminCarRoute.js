
const AdminCarRouter=require("express").Router()
const {encoder} =require("../../middelware/bodyParser")
const {isLogin}  =require('../../middelware/roleCheckerMiddeware')
const {carsUploader} =require("../../middelware/multerMiddleware")

const {home,create, store, remove ,edit,update }=require("../../controller/admin/CarController")


AdminCarRouter.get("/",isLogin, home)
AdminCarRouter.get("/create",isLogin, create)
AdminCarRouter.post("/store",isLogin,carsUploader.single("pic"), encoder, store)
AdminCarRouter.get("/delete/:_id",isLogin, encoder, remove)
AdminCarRouter.get("/edit/:_id",isLogin, encoder,edit)
AdminCarRouter.post("/update/:_id",isLogin,carsUploader.single("pic"), encoder,update)

module.exports =AdminCarRouter
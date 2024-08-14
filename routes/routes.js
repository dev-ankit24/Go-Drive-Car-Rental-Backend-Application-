const router=require("express").Router()    // router object

const {homePage,aboutPage,servicePage,carsPage,contact,featurePage,teamPage,testimonialPage,eroor404} = require("../controller/front Controller")

router.get("",homePage)
router.get("/about",aboutPage)
router.get("/service",servicePage)
router.get("/feature",featurePage)
router.get("/cars",carsPage)
router.get("/team",teamPage)
router.get("/testimonials",testimonialPage)
router.get("/contact",contact)
router.get("/*",eroor404)

module.exports=router
const multer = require("multer")

function makeUploader(folderName){
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, `public/uploads/${folderName}`)
        },
        filename: function (req, file, cb) {
          cb(null,Date.now()+file.originalname)
        }
      })
      
      const upload = multer({ storage: storage })
      return upload
}
 
module.exports={
    userUploader:makeUploader("users"),
    carsUploader:makeUploader("cars"),
testimonialUploader:makeUploader("testimonial"),
}
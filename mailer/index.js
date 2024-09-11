const nodemailer = require("nodemailer")

const mailer =  nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    tls:true,
    auth:{
        "user":process.env.EMAIL_SENDER,
        "pass":process.env.EMAIL_PASSWORD
    }
})

module.exports=mailer  
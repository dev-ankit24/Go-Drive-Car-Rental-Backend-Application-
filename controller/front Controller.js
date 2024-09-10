const Testimonial = require("../models/Testimonial");
const Car = require("../models/Car");
const Contact = require("../models/Contact");

async function homePage(req, res) {
  try {
    let testimonials = await Testimonial.find().sort({ _id: 1 });
    const cars = await Car.find().sort({ _id: 1 });
    res.render("index", { testimonials: testimonials, cars: cars });
  } catch (error) {
    console.log(error);
  }
}

function aboutPage(req, res) {
  res.render("aboutPage", { session: req.session, title: "About Us" });
}

function servicePage(req, res) {
  res.render("servicePage", { session: req.session, title: "Services" });
}

function featurePage(req, res) {
  res.render("featurePage", { session: req.session, title: "Features" });
}

async function carsPage(req, res) {
  try {
    const cars = await Car.find().sort({ _id: 1 });
    res.render("carsPage", { session: req.session, title: "Cars", cars: cars });
  } catch (error) {
    console.log(error);
  }
}

async function testimonialPage(req, res) {
  try {
    const testimonials = await Testimonial.find().sort({ _id: 1 });
    res.render("testimonialPage", {
      session: req.session,
      title: "Testimonials",
      testimonials: testimonials,
    });
  } catch (error) {
    console.log(error);
  }
}

// Contact get or store data
function contact(req, res) {
  res.render("contact", {
    session: req.session,
    title: "Contact Us",
    errorMessage: {},
    data: {},
    show: false,
  });
}

async function contactStore(req, res) {
  try {
    var data = new Contact(req.body);
    data.date = new Date();
    await data.save();
    //  start  SMS SENDER
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);

    const message = await client.messages.create({
        body:
            `Query Recieved ,Thanks ${req.body.name}, Your query has been Recieved Our  team will Contact Soon !!!`
        ,
        from: process.env.SMS_SENDER,
        to: req.body.phone.startsWith("+91")?req.body.phone:"+91"+req.body.phone,
    });
    console.log(message)
    // End Sms Sender 
    res.render("contact", {
      session: req.session,
      title: "Contact US",
      errorMessage: {},
      data: {},
      show: true,
    });
  } catch (error) {
    console.log(error);
    errorMessage = {};
    error.error?.name
      ? (errorMessage["name"] = error.errors?.name.message)
      : "";
    error.error?.email
      ? (errorMessage["email"] = error.errors?.email.message)
      : "";
    error.error?.phone
      ? (errorMessage["phone"] = error.errors?.phone.message)
      : "";
    error.error?.subject
      ? (errorMessage["subject"] = error.errors?.subject.message)
      : "";
    error.error?.message
      ? (errorMessage["message"] = error.errors?.message.message)
      : "";
    res.render("contact", {
      errorMessage: errorMessage,
      title: "Contact Us Error",
      data: data,
      show: false,
    });
  }
}

function eroor404(req, res) {
  res.render("404", { session: req.session, title: "404 Page Not Found !" });
}

module.exports = {
  homePage,
  aboutPage,
  carsPage,
  contact,
  featurePage,
  servicePage,
  testimonialPage,
  eroor404,
  contactStore,
};

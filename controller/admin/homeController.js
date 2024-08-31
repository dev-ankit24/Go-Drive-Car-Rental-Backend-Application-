const session = require("express-session");
const User = require("../../models/User");

async function home(req, res) {
  try {
    let data = await User.findOne({ _id: req.session.userid });
    if (data) {
      res.render("admin/home/index", {
        session: req.session,
        title: "Admin Home",
        data: data,
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
}

// login controller
function login(req, res) {
  res.render("admin/home/login", {
    session: req.session,
    title: "Admin Login ",
  });
}

async function loginStore(req, res) {
  try {
    let data = await User.findOne({
      $and: [
        {
          $or: [{ username: req.body.username }, { email: req.body.username }],
        },
        { password: req.body.password },
      ],
    });
    if (data) {
      req.session.login = true;
      req.session.name = data.name;
      req.session.userid = data.id;
      res.redirect("/admin");
    } else {
      res.render("admin/home/login", {
        session: req.session,
        title: "Admin Login error ",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

//  Logout controller

function logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    } else {
      console.log("Session destroyed successfully.");
    }
    res.redirect("/admin/login");
  });
}

// profile update (image store)
async function profileUpdate(req, res) {
  try {
    let data = await User.findOne({ _id: req.session.userid });
    console.log(data);

    if (data) {
      res.render("admin/home/profile-update", {
        session: req.session,
        title: "Admin Profile Update ",
        data: data,
      });
    } else {
      res.redirect("/admin/login");
      console.log("Error profile update function");
    }
  } catch (error) {
    console.log(error);
  }
}

async function profileUpdateStore(req, res) {
  let data = await User.findOne({ _id: req.session.userid });
  if (data) {
    data.name = req.body.name;
    data.email = req.body.email;
    data.phone = req.body.phone;
    data.username = req.body.username;
    if (req.file) {
      try {
        const fs = require("fs");
        fs.unlinkSync(data.pic);
      } catch (error) {}
      data.pic = req.file.path;
      await data.save();
      res.redirect("/admin");
    }
  } else {
    console.log("error Profile Update store");
  }
}
module.exports = {
  home,
  login,
  loginStore,
  logout,
  profileUpdate,
  profileUpdateStore,
};

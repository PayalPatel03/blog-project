const { Router } = require("express");
const userRouter = Router();
const userController = require("../controller/userController");
const upload = require("../middleware/imageUpload");
const userAuth = require("../middleware/userAuth");
const blogModule = require("../models/userModel");

userRouter.get("/clientHomepage", userController.homePage);
userRouter.get("/formPage",userAuth,userController.formPage);
userRouter.get("/delete/:id", userController.deleteBlog);
userRouter.get("/edit/:id", userController.editBlog);
userRouter.get("/view/:id", userController.viewSingleBlog);
userRouter.get("/login", userController.loginPage);
userRouter.get("/register", userController.registerPage);
userRouter.post("/update/:id", upload, userController.updateBlog);
userRouter.post("/formPage",upload, userController.blogCreate);


userRouter.post("/like/:id", async (req, res) => {
  try {
    await blogModule.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } });
    res.redirect("/view/" + req.params.id);
  } catch (err) {
    console.error(err);
    res.redirect("/clientHomepage");
  }
});


userRouter.post("/dislike/:id", async (req, res) => {
  try {
    await blogModule.findByIdAndUpdate(req.params.id, { $inc: { dislikes: 1 } });
    res.redirect("/view/" + req.params.id);
  } catch (err) {
    console.error(err);
    res.redirect("/clientHomepage");
  }
});

module.exports = userRouter;

userRouter.get("/logout", (req, res) => {
  res.clearCookie("token");   
  res.redirect("/register");
});

const User = require("../models/user.model")

module.exports.homePage=(req,res)=>{
      res.render('pages/index')
}
module.exports.signupPage = (req,res)=>{
    res.render('pages/signup')
}

module.exports.loginPage = (req,res)=>{
    res.render('pages/login')
}

module.exports.signup = async (req,res)=>{
    try {
        await User.create(req.body)
        console.log("User Created")
        res.redirect('/login')
    } catch (error) {
        console.log(error)
        res.redirect('/signup')
    }
}

const { Router } = require("express");
const { homePage, signupPage, loginPage, signup } = require("../controllers");


const router = Router()

router.get('/',homePage)
router.get('/signup',signupPage)
router.get('/login',loginPage)

router.post('/signup',signup)

module.exports = router

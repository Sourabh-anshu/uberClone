const express = require("express");
const router = express.Router();
const {body} = require("express-validator")
const userController = require("../controllers/user.controller");

router.post("/register", [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("Password must be of 6 character atleast"),
    body("fullname.firstname").isLength({min: 3}).withMessage("First name must be of atleast 3 characters.")
],
userController.registeruser

)


module.exports = router;
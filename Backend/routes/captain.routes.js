const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");


router.post("/register", [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("Password must be of 6 character atleast"),
    body("fullname.firstname").isLength({min: 3}).withMessage("First name must be of atleast 3 characters."),
    body("vehicle.color").isLength({min: 3}).withMessage("Color must be of atleast 3 characters."),
    body("vehicle.plate").isLength({min: 3}).withMessage("Plate must be of atleast 3 characters."),
    body("vehicle.capacity").isInt({min: 1}).withMessage("Capacity must be of atleast 3 characters."),
    body("vehicle.vehicleType").isIn(['car', 'auto', 'motorcycle']).withMessage(" Invalid choice of vehicle.")
],
    captainController.registerCaptain
)

module.exports = router;
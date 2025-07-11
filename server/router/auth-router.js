

const express = require("express");
const router = express.Router();
const { home, register, login , user} = require("../Controllers/auth-controllers");
const validate  = require("../middleware/validate-middleware");
const sighupSchema = require("../validators/auth-validator");
const authMiddleware = require ("../middleware/auth-middleware")



router.route("/").get(home);
router.route("/register").post(validate(sighupSchema), register);
router.route("/login").post(login);
router.route("/user").get(authMiddleware, user);


module.exports = router;
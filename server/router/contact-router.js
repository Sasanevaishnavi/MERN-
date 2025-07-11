

const express = require("express");
const router = express.Router();
const contactController = require("../Controllers/contact-controllers");

router.route("/").post(contactController);

module.exports = router;

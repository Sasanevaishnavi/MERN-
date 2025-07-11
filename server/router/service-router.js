const express = require ("express");
const router = express.Router();
const getservices = require("../Controllers/service-controller");

router.route("/service").get(getservices);

module.exports = router;
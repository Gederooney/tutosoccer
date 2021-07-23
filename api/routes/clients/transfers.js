const express = require("express");
const router = express.Router();
const controller = require("../../controllers/clients/transfers");

router.get("/", controller.getTransfers);

module.exports = router;

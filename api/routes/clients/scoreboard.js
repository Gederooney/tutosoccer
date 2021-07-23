const express = require("express");
const router = express.Router();
const controller = require("../../controllers/clients/scoreBoard");

router.get("/:date", controller.getBoard);

module.exports = router;
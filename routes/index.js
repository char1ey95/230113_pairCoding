const express = require("express");
const router = express.Router();
const board = require("./board.router");
const reply = require("../reply/reply.route");

router.use("/board", board);
router.use("/reply", reply);

module.exports = router;


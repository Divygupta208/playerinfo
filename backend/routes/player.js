const express = require("express");

const router = express.Router();
const playerConroller = require("../controllers/player");

router.post("/addplayer", playerConroller.postAddPlayer);

module.exports = router;

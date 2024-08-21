const express = require("express");

const router = express.Router();
const playerConroller = require("../controllers/player");

router.post("/addplayer", playerConroller.postAddPlayer);

router.patch("/editplayer/:id", playerConroller.updatePlayer);

router.get("/getplayer", playerConroller.getPlayer);

module.exports = router;

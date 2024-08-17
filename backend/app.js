const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const playerRoute = require("./routes/player");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", (req, res, next) => {
  res.json({ message: "welcome" });
});

app.use("/api", playerRoute);

app.listen(3000);

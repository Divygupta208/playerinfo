const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const playerRoute = require("./routes/player");
const sequelize = require("./util/database");
const Player = require("./models/player");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

// app.use("/", (req, res, next) => {
//   res.json({ message: "welcome" });
// });

app.use("/api", playerRoute);

sequelize
  .sync()
  .then((result) => {
    console.log("Database synchronized successfully");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error synchronizing the database:", err);
  });

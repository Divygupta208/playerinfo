const Player = require("../models/player");
const { Op } = require("sequelize");

exports.postAddPlayer = async (req, res, next) => {
  try {
    const {
      name,
      dob,
      photoUrl,
      birthplace,
      career,
      matches,
      score,
      fifties,
      centuries,
      wickets,
      average,
    } = req.body;

    if (!name || !dob || !birthplace || !career) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const player = await Player.create({
      name,
      dob,
      photoUrl,
      birthplace,
      career,
      matches: matches || 0,
      score: score || 0,
      fifties: fifties || 0,
      centuries: centuries || 0,
      wickets: wickets || 0,
      average: average || 0.0,
    });

    res.status(201).json({
      message: "Player created successfully",
      player,
    });
  } catch (error) {
    console.error("Error creating player:", error);

    res.status(500).json({
      message: "An error occurred while creating the player",
      error: error.message,
    });
    next(error);
  }
};

exports.getPlayer = async (req, res, next) => {
  const name = req.query.name;
  if (!name) {
    return res
      .status(400)
      .json({ message: "Name query parameter is required" });
  }

  try {
    const players = await Player.findAll({
      where: {
        name: {
          [Op.like]: `${name}`,
        },
      },
    });

    if (players.length === 0) {
      return res
        .status(404)
        .json({ message: "No players found with the given name" });
    }

    res.status(200).json(players);
  } catch (error) {
    console.error("Error retrieving player:", error);
    res
      .status(500)
      .json({ message: "An error occurred while retrieving the player" });
  }
};

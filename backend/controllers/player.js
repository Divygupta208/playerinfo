const Player = require("../models/player");

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

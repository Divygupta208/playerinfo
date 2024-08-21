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
      message: "error occurred while creating the player",
      error: error.message,
    });
    next(error);
  }
};

exports.getPlayer = async (req, res, next) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
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
      return res.status(404).json({ message: "No players found" });
    }

    res.status(200).json(players);
  } catch (error) {
    console.error("Error retrieving player:", error);
    res.status(500).json({ message: "error occurred while retrieving" });
  }
};

exports.updatePlayer = async (req, res, next) => {
  const id = req.params.id;
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

  try {
    const player = await Player.findByPk(id);

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    player.name = name || player.name;
    player.dob = dob || player.dob;
    player.photoUrl = photoUrl || player.photoUrl;
    player.birthplace = birthplace || player.birthplace;
    player.career = career || player.career;
    player.matches = matches !== undefined ? matches : player.matches;
    player.score = score !== undefined ? score : player.score;
    player.fifties = fifties !== undefined ? fifties : player.fifties;
    player.centuries = centuries !== undefined ? centuries : player.centuries;
    player.wickets = wickets !== undefined ? wickets : player.wickets;
    player.average = average !== undefined ? average : player.average;

    await player.save();

    res.status(200).json({
      message: "Player updated successfully",
      player,
    });
  } catch (error) {
    console.error("Error updating player:", error);
    res.status(500).json({
      message: "An error occurred while updating the player",
      error: error.message,
    });
  }
};

exports.postAddPlayer = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ message: "Player created successfully" });
};

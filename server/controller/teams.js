const Teams = require("../model/teams.js");

module.exports.create = async (req, res) => {
  try {
    const { name, img, matchCount, score } = req.body;
    if (!name || !img)
      return res.json({ msg: "Body is not valid" });

    const team = await Teams.create({ name, img, matchCount, score });

    await team.save();
    res.status(201).json({ team });
  } catch (error) {
    res.status(400).json({ msg: "Team is not saved.It might be exist" });
  }
};

module.exports.find = async (req, res) => {
    
};

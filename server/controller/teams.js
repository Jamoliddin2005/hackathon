const Teams = require("../model/teams.js");

module.exports.create = async (req, res) => {
  try {
    const { name, img, matchCount, score } = req.body;
    if (!name || !img) return res.json({ msg: "Body is not valid" });

    const team = await Teams.create({ name, img, matchCount, score });

    await team.save();
    res.status(201).json({ team });
  } catch (error) {
    res.status(400).json({ msg: "Team is not saved.It might be exist" });
  }
};

module.exports.find = async (req, res) => {
  const teams = await Teams.find();
  res.status(200).json(teams);
};

module.exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, img } = req.body;
    if (!name || !img)
      return res.status(400).json({ msg: "Body is not valid" });

    await Teams.findByIdAndUpdate(id, {
      $set: {
        name: name,
        img: img,
      },
    });

    res.status(200).json({ msg: "Team has been changed" });
  } catch (error) {
    res.status(400).json({ msg: "Can not be changed" });
  }
};

const Category = require("../model/category.js");
const List = require("../model/list.js");

module.exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json("Body is not valid");

    const category = await Category.create({ name, oldOrNew: "new" });
    await Category.create({ name, oldOrNew: "old" });
    await List.create({ name });

    await category.save();
    return res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Category is not created" });
  }
};

module.exports.find = async (req, res) => {
  const category = await Category.find();
  res.json(category);
};

module.exports.newCreateTeam = async (req, res) => {
  try {
    const id = req.params.id;
    const { team1, team2, time } = req.body;
    if (!team1 || !team2 || !time)
      return res.status(400).json({ msg: "Body is not valid" });

    const category = await Category.findById(id);

    if (!category)
      return res.status(400).json({ msg: "The category was not found" });
    if (category?.oldOrNew !== "new")
      return res.status(400).json({ msg: "The category must be new" });

    category.teams.push({ team1, team2, time });

    await category.save();

    return res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Team is not added" });
  }
};

module.exports.oldCreateTeam = async (req, res) => {
  try {
    const id = req.params.id;
    const { team1, team2, score1, score2, time } = req.body;

    if (
      !team1 ||
      !team2 ||
      typeof score1 !== "number" ||
      typeof score2 !== "number" ||
      !time
    )
      return res.status(400).json({ msg: "Body is not valid" });
    if (team1 === team2)
      return res.status(400).json({ msg: "teams must be diffrent" });

    // category save
    const category = await Category.findById(id);

    if (category.oldOrNew !== "old")
      return res.status(400).json({ msg: "The category must be old" });

    const check = await checkTime(team1, time);
    if(check) return res.status(400).json({msg: "This match is exists"})
    
    category.teams.push({ team1, team2, score1, score2, time });
    await category.save();
    await newCategoryUppdate(category.name, team1, team2);
    // list teams create
    await addListTeams(team1, category.name);
    await addListTeams(team2, category.name);

    // list teams update
    await listItemsUpdate(score1, score2, team1, team2);

    return res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Team is not added" });
  }
};

// check time in catgeory old
async function checkTime(team1, time) {
  const category = await Category.findOne({ "teams.team1": team1, "teams.time": time });
  if (category) return true;
  return false;
}

// new category update
async function newCategoryUppdate(categoryName, team1) {
  await Category.findOneAndUpdate(
    { name: categoryName },
    {
      $pull: {
        teams: { team1 },
      },
    }
  );
}

// list updates
async function listItemsUpdate(score1, score2, team1, team2) {
  if (score1 > score2) {
    listUpdate("score", 3, team1);
  } else if (score1 < score2) {
    listUpdate("score", 3, team2);
  } else if (score1 === score2) {
    listUpdate("score", 1, team1);
    listUpdate("score", 1, team2);
  }

  listUpdate("matchCount", 1, team1);
  listUpdate("matchCount", 1, team2);
}

async function listUpdate(updateMatch, count, targetId) {
  await List.findOneAndUpdate(
    { "teams.teamId": targetId },
    {
      $inc: {
        [`teams.$.${updateMatch}`]: count,
      },
    }
  );
}

async function addListTeams(teamId, listName) {
  const team = await List.findOne({ "teams.teamId": teamId });
  if (team) return;

  await List.findOneAndUpdate(
    { name: listName },
    {
      $push: {
        teams: { teamId },
      },
    }
  );
}

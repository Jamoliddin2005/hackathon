// check time in catgeory old
module.exports.checkTime = async (team1, time) => {
  const category = await Category.findOne({
    "teams.team1": team1,
    "teams.time": time,
  });
  if (category) return true;
  return false;
}

// new category update
module.exports.newCategoryUppdate = async (categoryName, team1) => {
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
module.exports.listItemsUpdate =  async (score1, score2, team1, team2) => {
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

module.exports.listUpdate =  async (updateMatch, count, targetId) => {
  await List.findOneAndUpdate(
    { "teams.teamId": targetId },
    {
      $inc: {
        [`teams.$.${updateMatch}`]: count,
      },
    }
  );
}

module.exports.addListTeams =  async (teamId, listName) => {
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

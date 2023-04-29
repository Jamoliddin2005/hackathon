const Category = require("../model/category.js");

module.exports.create = async (req, res) => {
  try {
    const { name, oldOrNew } = req.body;
    if (!name || !oldOrNew) return res.status(400).json("Body is not valid");

    const categories = await Category.find({ name });
    if (categories.length >= 2)
      return res.status(400).json({ msg: "This category is exists" });

    const checkCategory = categories.find(
      (category) => category.oldOrNew === oldOrNew
    );
    
    if (checkCategory)
      return res.json({ msg: `oldOrNew must be '${oldOrNew}' is used available only 'old'` });

    const category = await Category.create({ name, oldOrNew });

    await category.save();
    return res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Category is not created" });
  }
};

module.exports.find = async (req, res) => {};

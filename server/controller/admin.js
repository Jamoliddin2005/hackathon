const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Admin = require("../model/admin.js");
require("dotenv").config();

const salt = parseInt(process.env.SECRET_SALT) || 10;
const jwt_key = process.env.SECRET_KEY || "";

module.exports.register = async (req, res, next) => {
  try {
    const { phone, password } = req.body;
    if (!phone || !password)
      return res.json({ msg: "phone or passowrd is not valid" });

    const hashPassword = await bcrypt.hash(password, salt);
    const admin = {
      phone,
      password: hashPassword,
    };

    const createdAdmin = await Admin.create(admin);

    await createdAdmin.save();
    const jwtAdmin = { id: createdAdmin.id, phone: createdAdmin.phone };

    const token = await jwt.sign(jwtAdmin, jwt_key, { expiresIn: "1d" });

    return res.status(201).json({ admin: jwtAdmin, accesToken: token });
  } catch (err) {
    next(err);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { phone, password } = req.body;
    if (!phone || !password)
      return res.json({ msg: "phone or passowrd is not valid" });

    const admin = await Admin.findOne({ phone });
    if (!admin) return res.json({ msg: "admin is not founded" });

    const checkPassword = await bcrypt.compare(password, admin.password);
    if (!checkPassword)
      return res.json({ msg: "phone or passowrd is not found" });

    const jwtAdmin = { id: admin.id, phone: admin.phone };
    const token = await jwt.sign(jwtAdmin, jwt_key, { expiresIn: "1d" });

    return res.status(200).json({ accesToken: token });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

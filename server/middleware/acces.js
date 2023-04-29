const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwt_key = process.env.SECRET_KEY || "";

module.exports = async (req, res, next) => {
  const token = req.headers.authenticated;
  jwt.verify(token, jwt_key, (err, decoded) => {
    if(err){
        console.log(err)
        res.status(400).json({msg: "Token is not valid"})
    }else{
        next()
    }
  });
  
};

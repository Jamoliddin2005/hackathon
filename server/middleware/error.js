module.exports = (err, req, res, next) => {
  res.json({status: 500, msg: "Unexpected error"});
};

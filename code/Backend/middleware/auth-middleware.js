const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  if (req.headers && req.headers.authorization) {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token, "Thisisprivatekey", (err, user) => {
        if (err) {
          res.status(500).json(err);
        }
        // console.log("user:>>>",user)
        res.user = user;
        next();
      });
    }
  } else {
    res.json("Token is require!!");
  }
};

module.exports = authMiddleware;


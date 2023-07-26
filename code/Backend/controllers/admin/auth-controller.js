const db = require("../../models/index");
const Users = db.User;
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

exports.signUpUser = async (req, res) => {
  const { username, password } = req.body;
  console.log("first")
  const hashPassword = await bcrypt.hash(password, 10);
  const findUser = await Users.findOne({ where: { username: username } });
  if (findUser) {
    return res.json("This user is already signUp!!");
  }
  const response = await Users.create({
    username,
    password: hashPassword,
  });
  res.json(response);
};

exports.userLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const findUser = await Users.findOne({ where: { username: username } });

    if (!findUser) {
      res.json("This user is not have an acount");
    } else {
      const comparePassword = await bcrypt.compareSync(password, findUser.dataValues.password)
      if(comparePassword){
        const userData = findUser.dataValues
        const token  = jwt.sign(userData,"Thisisprivatekey")
        findUser.dataValues.token = token;
        delete findUser.dataValues.password;

        res.status(200).json({message:"User signin successfull!!!!",user: findUser})
      }
    }
  } catch (error) {
    res.json(error.message);
  }
};


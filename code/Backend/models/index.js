'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;







// here is some code that you can use to secure your Node.js application

// const express = require('express');
// const bodyParser = require('body-parser');
// const helmet = require('helmet');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(helmet());

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   // Validate the username and password.
//   if (!validator.isEmail(username)) {
//     return res.status(400).send('Invalid username');
//   }

//   if (!validator.isLength(password, { min: 8 })) {
//     return res.status(400).send('Invalid password');
//   }

//   // Check if the username and password match the database.
//   const user = {
//     username,
//     password: bcrypt.hashSync(password, 10),
//   };

//   if (!user) {
//     return res.status(401).send('Invalid username or password');
//   }

//   // Log the user in.
//   res.status(200).send('User logged in');
// });

// app.listen(3000);

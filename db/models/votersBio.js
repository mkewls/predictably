'use strict';

var Sequelize = require('sequelize')
var db = require('APP/db')

// simple model, no validations, etc. given known fake data
module.exports = db.define('votersBio', {
  name: Sequelize.STRING,
  age: Sequelize.STRING,
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING
})

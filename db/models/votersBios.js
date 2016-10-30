'use strict';

var Sequelize = require('sequelize')
var db = require('APP/db')

module.exports = db.define('votersBios', {
  name: Sequelize.STRING,
  age: Sequelize.STRING,
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING
})

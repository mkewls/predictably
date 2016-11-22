'use strict';

var Sequelize = require('sequelize')
var db = require('APP/db')

// simple model, no validations, etc., given known fake data
module.exports = db.define('votersPref', {
  jobs: Sequelize.FLOAT,
  healthcare: Sequelize.FLOAT,
  childcare: Sequelize.FLOAT,
  lowerTaxes: Sequelize.FLOAT,
  gunRights: Sequelize.FLOAT,
  racialInjustice: Sequelize.FLOAT,
  education: Sequelize.FLOAT,
  lawEnforcement: Sequelize.FLOAT,
  foreignPolicy: Sequelize.FLOAT,
  terrorism: Sequelize.FLOAT
})

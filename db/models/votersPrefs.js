'use strict';

var Sequelize = require('sequelize')
var db = require('APP/db')

module.exports = db.define('votersPrefs', {
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

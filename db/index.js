'use strict'

const debug = require('debug')('sql')
const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('APP')
const seed = require('./seedData')

const name = process.env.DATABASE_NAME || pkg.name
const url = process.env.DATABASE_URL || `postgres://wapmbmrtaddhia:qHxyH-L-dva-84dz8gG9bvgzHT@ec2-54-163-248-14.compute-1.amazonaws.com:5432/d86sdtb90sfv2b`

console.log(chalk.yellow(`Opening database connection to ${url}`));

// create the database instance
const db = module.exports = new Sequelize(url, {
  logging: debug, // export DEBUG=sql in the environment to get SQL queries
  native: true    // lets Sequelize know we can use pg-native for ~30% more speed
});

// pull in our models
const models = require('./models')
const VotersBios = models.VotersBios
const VotersPrefs = models.VotersPrefs

// sync the db, note that we are seeding two tables separately, but assuming
// that each seed file sorts so that id's are matched across tables
// this less than ideal solution is a hack for example purposes not production!
function sync() {
  db.sync({force: true})
    .then(() => {
      VotersBios.bulkCreate(seed.votersBioData);
    })
    .then(() => {
      VotersPrefs.bulkCreate(seed.votersPrefsData);
    })
    .then(() => console.log(`Synced models and data to db ${url}`))
    .catch(err => { console.error(err)})
}
sync()

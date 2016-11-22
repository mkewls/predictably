'use strict'

const debug = require('debug')('sql')
const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('APP')  // abstraction of our app
const seed = require('./seedData')

const name = process.env.DATABASE_NAME || pkg.name
const url = process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`

console.log(chalk.yellow(`Opening database connection to ${url}`));

// create the database instance
const db = module.exports = new Sequelize(url, {
  logging: debug, // export DEBUG=sql in the environment to get SQL queries
  native: true    // lets Sequelize know we can use pg-native for ~30% more speed
});

// pull in our models
const models = require('./models')
const VotersBio = models.VotersBio
const VotersPref = models.VotersPref

// sync the db, note that we are seeding two tables separately, as this is only
// fake data and the association is not relevant. with real voter data, this
// would obviously not fly.
function sync() {
  db.sync({force: true})
    .then(() => {
      VotersBio.bulkCreate(seed.votersBioData);
    })
    .then(() => {
      VotersPref.bulkCreate(seed.votersPrefsData);
    })
    .then(() => console.log(`Synced models and data to db ${url}`))
    .catch(err => { console.error(err)})
}
sync()

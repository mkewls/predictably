'use strict'

/* This is a fake data generator to  *\
|  seed the recommendation engine.    |
|  Fill in the number of desired      |
|  voters and you're done!            |
\*                                   */

// the fake data generation library
// https://www.npmjs.com/package/casual
const casual = require('casual');

// DEFINE THE NUMBER OF VOTERS HERE!!
const NUM_VOTERS = 1000

// define voter for casual-created data
// nb: 0 is an empty value, 1 is weakest and 5 is strongest
// wrt. the voter's interest/feelings about the issue
// 0's are weighted to fill more often to simulate empty
// cells needing prediction
const voterPrefs = casual.define('voterPrefs', () => ({
  jobs: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4, h: 5 }),
  healthcare: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4, h: 5 }),
  childcare: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4, h: 5 }),
  lowerTaxes: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4, h: 5 }),
  gunRights: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4, h: 5 }),
  racialInjustice: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4, h: 5 }),
  education: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4, h: 5 }),
  lawEnforcement: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4, h: 5 }),
  foreignPolicy: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4, h: 5 }),
  terrorism: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4, h: 5 })
}));

// personal info about each voter (very fake)
const voterBios = casual.define('voterBios', () => ({
  name: casual.first_name,
  age: casual.integer(18,75),
  address: casual.address1,
  city: casual.city,
  state: casual.state_abbr,
  zip: casual.zip(5),
  phone: casual.phone,
  email: casual.email
}))

// function to generate fake voters using the definition above
// i.e., return [voterObject1, voterObject2, ...]
// the 'generator' func is a built-in to the casual lib
const dataGenerator = (times, generator) => {
  let votersData = [];

  for (let i = 0; i < times; ++i) {
    votersData.push(generator());
  }

  return votersData;
}

// create voters and their data
exports.votersPrefsData = dataGenerator(NUM_VOTERS, casual._voterPrefs);

exports.votersBioData = dataGenerator(NUM_VOTERS, casual._voterBios);

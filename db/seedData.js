'use strict'

/* This 'database' is simply a fake data *\
|  generation library that will seed our  |
|  recommendation engine. Specifically,   |
|  we are using it to create 500 fake     |
\*  names in the required array format.  */

// the fake data generation library
// https://www.npmjs.com/package/casual
const casual = require('casual');

// define voter for casual-created data
// nb: 0 is an empty value, 1 is weakest and 4 is strongest
// wrt. the voter's interest/feelings about the issue
// 0's are weighted to fill more often to simulate empty
// cells needing prediction
const voterPrefs = casual.define('voterPrefs', () => ({
  jobs: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4 }),
  healthcare: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4 }),
  childcare: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4 }),
  lowerTaxes: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4 }),
  gunRights: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4 }),
  racialInjustice: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4 }),
  education: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4 }),
  lawEnforcement: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4 }),
  foreignPolicy: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4 }),
  terrorism: casual.random_value({ a: 0, b: 0, c: 0, d: 1, e: 2, f: 3, g: 4 })
}));

// personal info about each voter
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
// the generator func is a built-in to the casual lib
const dataGenerator = (times, generator) => {
  let votersData = [];

  for (let i = 0; i < times; ++i) {
    votersData.push(generator());
  }

  return votersData;
}

// create 500 voters and their data
exports.votersPrefsData = dataGenerator(500, casual._voterPrefs);

exports.votersBioData = dataGenerator(500, casual._voterBios);

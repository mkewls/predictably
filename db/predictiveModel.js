'use strict'

// require 'likely' library for calculations and seed data for, well, data!
const Recommender = require('likely')
const seed = require('./seedData')

// get some data
const inputMatrixObj = seed.votersPrefsData;

// transform the data to the required spec =>
// array of objects to array of arrays,
// [[0, 3, 4, 1], [0, 2, 4, 2], etc..]
const inputMatrix = inputMatrixObj.map(obj => {
    let keys = Object.keys(obj), row=[];
    keys.forEach(key => {
      row.push(obj[key]);
    })
    return row;
});

// build the model with the formatted input matrix
const Model = Recommender.buildModel(inputMatrix);

module.exports = Model;

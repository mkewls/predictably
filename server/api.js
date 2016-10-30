'use strict'
const api = require('express').Router()
const Promise = require('bluebird')

const db = require('APP/db')
const models = require('../db/models')
const VotersBios = models.VotersBios
const VotersPrefs = models.VotersPrefs

const Model = require('../db/predictiveModel');

// api route to pull single voter files (both bio and preferences)
// nb: the lack of a bulkCreate for seeding associated tables
// means that there are two separate table pulls that assume a sorted db on id
api.get('/voters/:id', (req, res, next) => {
  let bios = VotersBios.findById(req.params.id)
  let prefs = VotersPrefs.findById(req.params.id)

  Promise.all([bios, prefs])
        .spread((biodata, prefdata) => {
          let voter = {}
          voter.bio = biodata;
          voter.prefs = prefdata;
          res.json(voter);
        })
        .catch(next)
});

// api route to pull predictive values from the recommendation engine
api.get('/recs/:id', (req, res, next) => {
  let id = req.params.id - 1;                // for indexing to model array
  let recs = Model.estimated.elements[id];
  res.json(recs);    // 10-value array
})

module.exports = api

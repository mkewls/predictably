'use strict'
const api = require('express').Router()
const Promise = require('bluebird')

const db = require('APP/db')
const models = require('../db/models')
const VotersBio = models.VotersBio
const VotersPref = models.VotersPref

const Model = require('../db/predictiveModel');

// api route to pull single voter files (both bio and preferences)
// recall that with fake data, there is no real association, hence
// this method is allowable
api.get('/voters/:id', (req, res, next) => {
  let bios = VotersBio.findById(req.params.id)
  let prefs = VotersPref.findById(req.params.id)

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

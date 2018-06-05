const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Topic = require('../models/topic');

mongoose.connect('mongodb://localhost/discuss');

router.get('/', (req, res) => {
  Topic.find({}, (err, topics) => {
    if (err) return res.send({message: 'Error trying to fetch topics'});
    res.send(topics);
  });
});

router.post('/', (req, res) => {
  Topic.create({
    title: req.body.title,
    body: req.body.body
  }).then(topic => {
    res.send(topic);
  });
});

module.exports = router;

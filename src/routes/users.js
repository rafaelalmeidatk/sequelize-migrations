var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/create/:username', (req, res) => {
  return models.User.create({
    username: req.params.username
  }).then((user) => {
    return res.json({ user });
  });
});

module.exports = router;
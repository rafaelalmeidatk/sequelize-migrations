var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  return models.User.findAll()
    .then((users) => {
      return res.json({ users });
    });
});

module.exports = router;
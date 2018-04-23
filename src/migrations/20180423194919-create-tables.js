'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.resolve()
      .then(() => {
        return fs.readFileSync(path.join(__dirname, 'initial.sql'), 'utf-8');
      })
      .then((initialSql) => {
        return queryInterface.sequelize.query(initialSql);
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};

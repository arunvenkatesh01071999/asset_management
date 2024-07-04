const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('asset', 'postgres', '9629', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;

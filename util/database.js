const Sequelize = require('sequelize');

const sequelize = new Sequelize('Design-the-User-and-Product-relationship', 'root', 'RRRR@NNNN', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

const { Sequelize } = require('sequelize')
const sequelize = new Sequelize({
  storage: './database/database.sqlite',
  dialect: 'sqlite',
})

module.exports = sequelize

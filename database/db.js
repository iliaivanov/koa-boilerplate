const Sequelize = require('sequelize')
const sequelize = new Sequelize('koa-test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize

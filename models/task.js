const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../database/db');

// Some migrations should be executed
// (async () => {
//   await sequelize.sync({ force: true })
//   // Code here
// })()

module.exports = sequelize.define(
  'Task',
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    task_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

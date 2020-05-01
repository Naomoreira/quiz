const Sequelize = require('sequelize')
const db = require('../db')

const Quiz = db.define('quiz', {
  authorFirstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false
    }
  },
  authorLastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false
    }
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false
    }
  }
})

module.exports = Quiz

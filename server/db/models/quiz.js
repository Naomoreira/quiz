const Sequelize = require('sequelize')
const db = require('../db')

const Quiz = db.define('quiz', {
  author: {
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

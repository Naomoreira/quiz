const Sequelize = require('sequelize')
const db = require('../db')

const Question = db.define('question', {
  prompt: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: false
    }
  },
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false
    }
  }
})

module.exports = Question

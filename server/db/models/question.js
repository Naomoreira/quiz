const Sequelize = require('sequelize')
const db = require('../db')
const Quiz = require('./quiz')

const Question = db.define('question', {
  prompt: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: false
    }
  },
  options: {
    type: Sequelize.ARRAY(Sequelize.STRING),
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

Question.findByQuiz = function(quizId) {
  return Question.findAll({
    include: {
      model: Quiz,
      where: {
        id: quizId
      }
    }
  })
}
module.exports = Question

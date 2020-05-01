const User = require('./user')
const Question = require('./question')
const Quiz = require('./quiz')

User.hasMany(Quiz)
Quiz.belongsTo(User)

Quiz.hasMany(Question)
Question.belongsTo(Quiz)

module.exports = {
  User,
  Quiz,
  Question
}

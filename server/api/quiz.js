const router = require('express').Router()
const {Quiz, User} = require('../db/models')

module.exports = router

const isAdmin = (req, res, next) => {
  const {user} = req
  if (!user || !user.isAdmin) {
    const err = new Error("You're not an admin!")
    err.status = 401
    return next(err)
  }
  next()
}
const isInstructor = (req, res, next) => {
  const {user} = req
  if (!user || !user.isInstructor) {
    const err = new Error("You're not an Instructor!")
    err.status = 401
    return next(err)
  }
  next()
}
// const isStudent = (req, res, next) => {
//   const {user} = req
//   if (!user || !user.isStudent) {
//     const err = new Error("You're not an Student!")
//     err.status = 401
//     return next(err)
//   }
//   next()
// }

router.get('/', async (req, res, next) => {
  try {
    const quizes = await Quiz.findAll({
      include: [{model: User}]
    })
    res.json(quizes)
  } catch (err) {
    next(err)
  }
})

// router.get('/', isStudent, isAdmin, isInstructor, async (req, res, next) => {
//   try {
//     const questionAndAnswers = await Quiz.findAll()
//     res.json(questionAndAnswers)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/:id', async (req, res, next) => {
  const {params} = req
  try {
    const quiz = await Quiz.findOne({
      where: {
        id: params.id
      },
      include: [{model: User}]
    })
    res.json(quiz)
  } catch (err) {
    next(err)
  }
})

// router.get('/:id', isAdmin, isInstructor, async (req, res, next) => {
//   const {params} = req
//   try {
//     const quiz = await Quiz.findOne({
//       where: {
//         id: params.id
//       }
//     })
//     res.json(quiz)
//   } catch (err) {
//     next(err)
//   }
// })

/////////////////////////////////////////////////
router.post('/', isAdmin, isInstructor, async (req, res, next) => {
  const {body} = req
  try {
    const newQuiz = await Quiz.create(body)
    res.json(newQuiz)
  } catch (err) {
    next(err)
  }
})
/////////////////////////
router.put('/:id', isAdmin, isInstructor, async (req, res, next) => {
  const {body, params} = req
  try {
    const quizToModify = await Quiz.findOne({
      where: {
        id: params.id
      }
    })
    if (quizToModify) {
      const updatedQuiz = await quizToModify.update(body)
      res.json(updatedQuiz)
    } else {
      res.status(404).json('User not found')
    }
  } catch (err) {
    next(err)
  }
})

/////////////////////////////////////

router.delete('/:id', isAdmin, isInstructor, async (req, res, next) => {
  const {params} = req
  try {
    const quiz = await Quiz.findByPk(params.id)
    if (quiz) {
      await Quiz.destroy({
        where: {
          id: params.id
        }
      })
      res.send(`This quiz is deleted`)
    } else {
      res.status(404).json('Product not found')
    }
  } catch (err) {
    next(err)
  }
})

const router = require('express').Router()
const {Question, Quiz} = require('../db/models')
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
const isStudent = (req, res, next) => {
  const {user} = req
  if (!user || !user.isStudent) {
    const err = new Error("You're not an Student!")
    err.status = 401
    return next(err)
  }
  next()
}

router.get('/', async (req, res, next) => {
  try {
    const question = await Question.findAll({
      // ,
      attributes: ['prompt', 'options'],
      include: [{model: Quiz}]
    })
    res.json(question)
  } catch (err) {
    next(err)
  }
})

// router.get('/answers', async (req, res, next) => {
//   try {
//     const question = await Question.findAll({
//       include: [{model: Quiz}]
//     })
//     res.json(question)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/quiz/:quizId', async (req, res, next) => {
  const {quizId} = req.params
  try {
    const question = await Question.findByQuiz(quizId)
    res.json(question)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  const {params} = req
  try {
    const question = await Question.findOne({
      where: {
        id: params.id
      },
      attributes: ['prompt']
    })
    res.json(question)
  } catch (err) {
    next(err)
  }
})

router.get('/Answers', isAdmin, isInstructor, async (req, res, next) => {
  try {
    const questionAndAnswers = await Question.findAll({
      include: [{model: Quiz}]
    })
    res.json(questionAndAnswers)
  } catch (err) {
    next(err)
  }
})
/////////////////////////////////////////////////
router.post('/', isAdmin, isInstructor, async (req, res, next) => {
  const {body} = req
  try {
    const newQuestion = await Question.create(body)
    res.json(newQuestion)
  } catch (err) {
    next(err)
  }
})
/////////////////////////
router.put('/:id', isAdmin, isInstructor, async (req, res, next) => {
  const {body, params} = req
  try {
    const questionToModify = await Question.findOne({
      where: {
        id: params.id
      }
    })
    if (questionToModify) {
      const updatedQuestion = await questionToModify.update(body)
      res.json(updatedQuestion)
    } else {
      res.status(404).json('Question not found')
    }
  } catch (err) {
    next(err)
  }
})

/////////////////////////////////////

router.delete('/:id', isAdmin, isInstructor, async (req, res, next) => {
  const {params} = req
  try {
    const question = await Question.findByPk(params.id)
    if (question) {
      await Product.destroy({
        where: {
          id: params.id
        }
      })
      res.send(`This question is deleted`)
    } else {
      res.status(404).json('Product not found')
    }
  } catch (err) {
    next(err)
  }
})

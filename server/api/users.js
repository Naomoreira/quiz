const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

const isAdmin = (req, res, next) => {
  const {user} = req
  if (!user || !user.isAdmin) {
    const err = new Error("You're not an Admin!")
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

////////////////////////////////////////////////
router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})
router.get('/:id', isAdmin, async (req, res, next) => {
  const {params} = req
  try {
    const users = await User.findOne({
      where: {
        id: params.id
      }
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
/////////////////////////////////////
router.put('/:id', isAdmin, isInstructor, async (req, res, next) => {
  const {body, params} = req
  try {
    const userToModify = await User.findOne({
      where: {
        id: params.id
      }
    })
    if (userToModify) {
      const updatedUser = await userToModify.update(body)
      res.json(updatedUser)
    } else {
      res.status(404).json('User not found')
    }
  } catch (err) {
    next(err)
  }
})
////////////////////////////////////

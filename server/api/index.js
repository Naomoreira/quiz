const router = require('express').Router()
module.exports = router

const isLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.sendStatus(403)
  }
  next()
}

router.use('/users', require('./users'))
router.use('/question', isLoggedIn, require('./question'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

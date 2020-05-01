/* const router = require('express').Router()
const fetch = require('node-fetch')
module.exports = router

router.get('/category=Book&category=easy', async function(req, res, next) {
  try {
    function theData() {
      return fetch(
        `https://opentdb.com/api.php?amount=5&category=10&difficulty=easy&type=multiple`
      )
    }
    const processData = async () => {
      const cov19ByState = await theData()
      const thisRes = await cov19ByState.json()
      res.json(thisRes)
    }
    processData()
    res.end
  } catch (err) {
    next(err)
  }
})

router.get('/category=Book&category=medium', async function(req, res, next) {
  try {
    function theData() {
      return fetch(
        `https://opentdb.com/api.php?amount=5&category=10&difficulty=medium&type=multiple`
      )
    }
    const processData = async () => {
      const cov19ByState = await theData()
      const thisRes = await cov19ByState.json()
      res.send(thisRes)
    }
    processData()
    res.end
  } catch (err) {
    next(err)
  }
})
///////////////////////////////////
router.get('/category=Anime&category=easy', async function(req, res, next) {
  try {
    function theData() {
      return fetch(
        `https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple`
      )
    }
    const processData = async () => {
      const cov19ByState = await theData()
      const thisRes = await cov19ByState.json()
      res.send(thisRes)
    }
    processData()
    res.end
  } catch (err) {
    next(err)
  }
})
router.get('/category=Anime&category=medium', async function(req, res, next) {
  try {
    function theData() {
      return fetch(
        `https://opentdb.com/api.php?amount=5&category=31&difficulty=medium&type=multiple`
      )
    }
    const processData = async () => {
      const cov19ByState = await theData()
      const thisRes = await cov19ByState.json()
      res.send(thisRes)
    }
    processData()
    res.end
  } catch (err) {
    next(err)
  }
})
///////////////////////////////////////////////////////
router.get('/category=Film&category=easy', async function(req, res, next) {
  try {
    function theData() {
      return fetch(
        `https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple`
      )
    }
    const processData = async () => {
      const cov19ByState = await theData()
      const thisRes = await cov19ByState.json()
      res.send(thisRes)
    }
    processData()
    res.end
  } catch (err) {
    next(err)
  }
})
router.get('/category=Film&category=medium', async function(req, res, next) {
  try {
    function theData() {
      return fetch(
        `https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=multiple`
      )
    }
    const processData = async () => {
      const cov19ByState = await theData()
      const thisRes = await cov19ByState.json()
      res.send(thisRes)
    }
    processData()
    res.end
  } catch (err) {
    next(err)
  }
})
////////////////////////////////////
router.get('/category=Mathematics&category=easy', async function(
  req,
  res,
  next
) {
  try {
    function theData() {
      return fetch(
        `https://opentdb.com/api.php?amount=5&category=19&difficulty=easy&type=multiple`
      )
    }
    const processData = async () => {
      const cov19ByState = await theData()
      const thisRes = await cov19ByState.json()
      res.send(thisRes)
    }
    processData()
    res.end
  } catch (err) {
    next(err)
  }
})
router.get('/category=Mathematics&category=medium', async function(
  req,
  res,
  next
) {
  try {
    function theData() {
      return fetch(
        `https://opentdb.com/api.php?amount=5&category=19&difficulty=medium&type=multiple`
      )
    }
    const processData = async () => {
      const cov19ByState = await theData()
      const thisRes = await cov19ByState.json()
      res.send(thisRes)
    }
    processData()
    res.end
  } catch (err) {
    next(err)
  }
})
////////////////////////////////////////////
router.get('/category=Science&category=easy', async function(req, res, next) {
  try {
    function theData() {
      return fetch(
        `https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple`
      )
    }
    const processData = async () => {
      const cov19ByState = await theData()
      const thisRes = await cov19ByState.json()
      res.send(thisRes)
    }
    processData()
    res.end
  } catch (err) {
    next(err)
  }
})
router.get('/category=Science&category=medium', async function(req, res, next) {
  try {
    function theData() {
      return fetch(
        `https://opentdb.com/api.php?amount=5&category=17&difficulty=medium&type=multiple`
      )
    }
    const processData = async () => {
      const cov19ByState = await theData()
      const thisRes = await cov19ByState.json()
      res.send(thisRes)
    }
    processData()
    res.end
  } catch (err) {
    next(err)
  }
}) */

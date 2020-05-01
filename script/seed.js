'use strict'

const db = require('../server/db')
const {User, Quiz, Question} = require('../server/db/models')
const {
  EXP_PSS_I,
  EXP_PSS_II,
  EXP_PSS_III,
  EXP_PSS_IV,
  EXP_PSS_V,
  EXP_PSS_VI,
  EXP_PSS_VII,
  EXP_PSS_VIII,
  EXP_PSS_IX,
  EXP_PSS_X
} = require('../secrets')
async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Hank',
      lastName: 'Hill',
      email: 'hank@email.com',
      password: EXP_PSS_I
    }),
    User.create({
      firstName: 'Peggy',
      lastName: 'Hill',
      email: 'peggy@email.com',
      password: EXP_PSS_II
    }),
    User.create({
      firstName: 'Bobby',
      lastName: 'Hill',
      email: 'bobby@email.com',
      password: EXP_PSS_III
    }),
    User.create({
      firstName: 'Connie',
      lastName: 'Souphanousinphone',
      email: 'connie@email.com',
      password: EXP_PSS_IV
    }),
    User.create({
      firstName: 'Dale',
      lastName: 'Gribble',
      email: 'dale@email.com',
      password: EXP_PSS_V
    }),
    User.create({
      firstName: 'Nancy',
      lastName: 'Gribble',
      email: 'nancy@email.com',
      password: EXP_PSS_VI
    }),
    User.create({
      firstName: 'William',
      lastName: 'Daltrey',
      email: 'bill@email.com',
      password: EXP_PSS_VII
    }),
    User.create({
      firstName: 'Jeffrey',
      lastName: 'Boomhauer',
      email: 'boomhauer@email.com',
      password: EXP_PSS_VIII
    }),
    User.create({
      firstName: 'Luanne',
      lastName: 'Platter',
      email: 'luanne@email.com',
      password: EXP_PSS_IX
    }),
    User.create({
      firstName: 'Lucky',
      lastName: 'Kleinschmidt',
      email: 'lucky@email.com',
      password: EXP_PSS_X
    })
  ])

  const quiz = await Promise.all([
    Quiz.create({
      authorFirstName: 'Dale',
      authorLastName: 'Gribble',
      title: 'Plankton Test',
      userId: 5
    }),
    Quiz.create({
      authorFirstName: 'Luanne',
      authorLastName: 'Platter',
      title: 'Plankton Test',
      userId: 9
    })
  ])

  const question = await Promise.all([
    Question.create({
      prompt: 'Which of the following is not a way to classify plankton?',
      options: ['By Shape', 'By Size', 'By Feeding Method', 'By Life Cycle'],
      answer: 'By Shape',
      quizId: 1
    }),
    Question.create({
      prompt: 'Which is the smallest type of plankton?',
      options: [
        'Ultraplankton',
        'Macroplankton',
        'Nannoplankton',
        'Microplankton'
      ],
      answer: 'Ultraplankton',
      quizId: 1
    }),
    Question.create({
      prompt: 'Which of the following is an autotroph?',
      options: ['Paramecium', 'Amoeba', 'Diatom', 'Copepod'],
      answer: 'Diatom',
      quizId: 1
    }),
    Question.create({
      prompt: 'Which of the following causes red tides?',
      options: ['Jellyfish', 'Amoebas', 'Dinoflagellates', 'Diatoms'],
      answer: 'Dinoflagellates',
      quizId: 1
    }),
    Question.create({
      prompt: 'Which of the following is a multicellular zooplankton?',
      options: ['Euglena', 'Paramecium', 'Amoeba', 'Daphnia'],
      answer: 'Daphnia',
      quizId: 1
    }),
    Question.create({
      prompt: 'Which of the following is a holoplankton?',
      options: ['Anemone', 'Krill', 'Shrimp', 'Crab'],
      answer: 'Krill',
      quizId: 2
    }),
    Question.create({
      prompt:
        'Which of the following is not used as a survival strategy by plankton?',
      options: [
        'Colorless',
        'Being small',
        'Ability to swim',
        'Migrate vertically'
      ],
      answer: 'Ability to swim',
      quizId: 2
    }),
    Question.create({
      prompt:
        'Which type of autotrophic plankton has a cell wall made of a silica?',
      options: ['By Shape', 'By Size', 'By Feeding Method', 'By Life Cycle'],
      answer: 'Diatom',
      quizId: 2
    }),
    Question.create({
      prompt: 'Which zooplankton is the largest?',
      options: ['Diatom', 'Copepod', 'Dinoflagellate', 'Amoeba'],
      answer: 'Daphnia',
      quizId: 2
    }),
    Question.create({
      prompt: 'Which of the following is not a meroplankton?',
      options: ['Fish', 'Copepod', 'Anemone', 'Crab'],
      answer: 'Copepod',
      quizId: 2
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${quiz.length} users`)
  console.log(`seeded ${question.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

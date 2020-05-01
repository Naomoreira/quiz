import axios from 'axios'

const GET_QUESTIONS = 'GET_QUESTIONS'

const initialState = {
  questions: []
}

const getQuestions = id => ({type: GET_QUESTIONS, id})

export const getQuestionThunk = quizId => async dispatch => {
  try {
    const res = await axios.get(`/api/question/quiz/${quizId}`)
    const {data} = res
    dispatch(getQuestions(data))
  } catch (err) {
    console.error(err)
  }
}

const allQuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {...state, questions: action.id}
    default:
      return state
  }
}

export default allQuestionsReducer

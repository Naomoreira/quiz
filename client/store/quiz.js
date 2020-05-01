import axios from 'axios'

const GET_QUIZ = 'GET_QUIZ'

const initialState = {
  quizes: []
}

const getQuiz = quiz => ({type: GET_QUIZ, quiz})

export const getQuizThunk = () => async dispatch => {
  try {
    const res = await axios.get(`/api/quiz`)
    const {data} = res
    dispatch(getQuiz(data))
  } catch (err) {
    console.error(err)
  }
}

const allQuizessReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUIZ:
      return {...state, quizes: action.quiz}
    default:
      return state
  }
}

export default allQuizessReducer

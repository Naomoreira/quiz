import React from 'react'
import {connect} from 'react-redux'
import {getQuizThunk} from '../../store/quiz'
import Questions from './questions'
import {Link} from 'react-router-dom'

class AllQuizes extends React.Component {
  componentDidMount() {
    this.props.getAllQuiz()
  }

  render() {
    const {quizes} = this.props
    return (
      <div>
        <div>
          {quizes &&
            quizes.map((quiz, index) => (
              <div key={index}>
                <h2>Title: {quiz.title}</h2>
                <h3>
                  From: {quiz.authorFirstName} {quiz.authorLastName}
                </h3>
                <p>Description: {quiz.description}</p>
                <Link to={`/question/quiz/${quiz.id}`}>
                  <h4>Link to questions</h4>
                </Link>
                <br />
              </div>
            ))}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    quizes: state.allQuizessReducer.quizes
  }
}

const mapDispatch = dispatch => {
  return {
    getAllQuiz: () => dispatch(getQuizThunk())
  }
}

export default connect(mapState, mapDispatch)(AllQuizes)

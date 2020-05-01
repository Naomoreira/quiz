import React from 'react'
import {connect} from 'react-redux'
import {getQuestionThunk} from '../../store/question'
import Options from './options'

class Questions extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {id} = this.props.match.params
    this.props.getAllQuestions(id)
  }

  render() {
    const {questions} = this.props
    return (
      <div>
        <div>
          <ol>
            {questions &&
              questions.map((question, index) => (
                <li key={index}>
                  {question.prompt}
                  <Options options={question.options} />
                  <br />
                </li>
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    questions: state.allQuestionsReducer.questions
  }
}

const mapDispatch = dispatch => {
  return {
    getAllQuestions: id => dispatch(getQuestionThunk(id))
  }
}

export default connect(mapState, mapDispatch)(Questions)

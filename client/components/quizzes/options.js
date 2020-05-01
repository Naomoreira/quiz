import React from 'react'

class Options extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {options} = this.props
    return (
      <div>
        <section>
          <form>
            <ul id="listOptions">
              {options &&
                options.map((option, index) => {
                  return <li key={index}>{option}</li>
                })}
            </ul>
          </form>
        </section>
      </div>
    )
  }
}

export default Options

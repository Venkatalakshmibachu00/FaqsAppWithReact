import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isAnswerVisible: false,
  }

  toggleAnswerVisibility = () => {
    this.setState(prevState => ({
      isAnswerVisible: !prevState.isAnswerVisible,
    }))
  }

  render() {
    const {eachfaq} = this.props
    const {questionText, answerText} = eachfaq
    const {isAnswerVisible} = this.state
    const icon = isAnswerVisible
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isAnswerVisible ? 'minus' : 'plus'

    return (
      <li className="faq-list">
        <div className="faq-question-container">
          <h3 className="question">{questionText}</h3>
          <button
            type="button"
            className="toggle-button"
            onClick={this.toggleAnswerVisibility}
          >
            <img src={icon} alt={altText} className="toggle-icon" />
          </button>
        </div>
        {isAnswerVisible && <hr className="horizontal-line" />}
        {isAnswerVisible && <p className="answer">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem

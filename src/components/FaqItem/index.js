// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  getAnswer = () => {
    const {isActive} = this.state

    const {each} = this.props

    const {id, questionText, answerText} = each

    if (isActive) {
      return (
        <div>
          <hr className="line" />
          <p className="para">{answerText}</p>
        </div>
      )
    }
    return ''
  }

  onClickActivate = () => {
    this.setState(prev => ({isActive: !prev.isActive}))
  }

  render() {
    const {each} = this.props

    const {id, questionText, answerText} = each

    const {isActive} = this.state

    const plusImage = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="single-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button className="btn" type="button" onClick={this.onClickActivate}>
            <img className="symbol" alt={altText} src={plusImage} />
          </button>
        </div>
        {this.getAnswer()}
      </li>
    )
  }
}

export default FaqItem

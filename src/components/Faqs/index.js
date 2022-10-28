// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <dib className="bg-container">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(each => (
              <FaqItem each={each} key={each.id} />
            ))}
          </ul>
        </div>
      </dib>
    )
  }
}

export default Faqs

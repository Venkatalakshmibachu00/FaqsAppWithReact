import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="app-card">
          <h1 className="app-title">FAQs</h1>
          <ul className="faqs-list-container">
            {faqsList.map(eachfaq => (
              <FaqItem key={eachfaq.id} eachfaq={eachfaq} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

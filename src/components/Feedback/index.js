// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {submitFeedback: false}

  submitFeedback = () => this.setState({submitFeedback: true})

  render() {
    const {submitFeedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="feedback-page">
        {!submitFeedback && (
          <div className="feedback">
            <h1 className="header">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="feedback-container">
              {emojis.map(eachItem => (
                <li key={eachItem.id} className="feedback-card">
                  <img
                    onClick={this.submitFeedback}
                    src={eachItem.imageUrl}
                    alt={eachItem.name}
                    className="image"
                  />
                  <p className="text-para">{eachItem.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {submitFeedback && (
          <div className="thanks-container">
            <img src={loveEmojiUrl} alt="love emoj" className="thanks-img" />
            <h1>Thank You</h1>
            <p>
              {' '}
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback

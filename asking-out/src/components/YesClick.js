import React, { Component } from 'react'
import HomePage from './HomePage'

export default class YesClick extends Component {
  render() {
    return (
        <div className="centered-form">
        <div className="form-box">
          <form>
            <h2 className="question">Khikhi..Love you!</h2>
            <div className="mb-3">
              <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" alt="Funny GIF" className="gif-image" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

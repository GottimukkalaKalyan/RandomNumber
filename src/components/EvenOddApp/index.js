// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  incrementNumber = () => {
    const RandomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({number: prevState.number + RandomNumber}))
  }

  render() {
    const {number} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Count {number}</h1>
          {number % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>}
          <button type="button" onClick={this.incrementNumber}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

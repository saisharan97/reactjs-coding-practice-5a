import {Component} from 'react'
import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isSubscribed: false,
    subscribeButtonText: 'Subscribe',
  }

  onClickSubscribe = () => {
    this.setState(prevState => ({
      isSubscribed: true,
      subscribeButtonText: 'Subscribed',
    }))
  }

  onClickSubscribed = () => {
    this.setState(prevState => ({
      isSubscribed: false,
      subscribeButtonText: 'Subscribe',
    }))
  }

  render() {
    const {isSubscribed, subscribeButtonText} = this.state

    return (
      <div className="background-container">
        <Welcome />
        {!isSubscribed && (
          <button type="button" onClick={this.onClickSubscribe}>
            {subscribeButtonText}
          </button>
        )}
        {isSubscribed && (
          <button type="button" onClick={this.onClickSubscribed}>
            {subscribeButtonText}
          </button>
        )}
      </div>
    )
  }
}

export default App

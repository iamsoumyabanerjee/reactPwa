import React, { Component } from 'react'
import TextArea from '../component/TextArea'
import Attendees from '../component/Attendees'
import '../styles/global.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Welcome to React boilerplate'
    }
  }

  render() {
    return (
      <Attendees />
      // <div>
      //   <h1>{this.state.value}</h1>
      //   <TextArea />
      // </div>
    )
  }
}

export default App


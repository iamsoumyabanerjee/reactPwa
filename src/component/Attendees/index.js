import React, { Component } from 'react'
import userService from '../../services/userService'

import './styles.scss'

class Attendees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attendees: []
    }
  }
  componentDidMount() {
    userService()
      .then(({data}) => this.setState({ attendees: data }))
  }

  renderAttendee(attendee, index) {
    return (
      <div key={index}>
        <p>{attendee.name}</p>
        <a href={`mailto:=${attendee.email}`}>{attendee.email}</a>
      </div>
    )
  }

  render() {
    const { attendees } = this.state

    return (<div className='attendees'>
      <header>Attendees</header>
      
      { attendees && attendees.map((elm, index) => this.renderAttendee(elm, index)) }
    </div>)
  }
}
  
export default Attendees
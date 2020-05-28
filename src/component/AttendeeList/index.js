import React, { useState, useEffect } from 'react'
import userService from '../../services/userService'
import Attendee from '../Attendee'

import './styles.scss'

const AttendeeList = () => {
  const [attendees, setAttendees] = useState({data: []})

  useEffect(() => {
    userService()
      .then(({data}) => setAttendees({ data }))
  }, [])
  
  
  return (
    <div className='attendee-list'>
      <header>Attendees</header>
      { console.log(attendees) }
      { attendees.data.map((elm, index) => <Attendee key={index} attendee={elm} />) }
    </div>
  )
}
  
export default AttendeeList
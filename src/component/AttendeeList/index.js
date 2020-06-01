import React, { useState, useEffect } from 'react'
import userService from '../../services/userService'
import Attendee from '../Attendee'
import Spinner from '../Spinner'

import './styles.scss'

const SHOW_LOADING_SPINNER = 'SHOW_LOADING_SPINNER'
const HIDE_LOADING_SPINNER = 'HIDE_LOADING_SPINNER'

const AttendeeList = () => {
  const [attendees, setAttendees] = useState({data: []})
  const [loader, setLoader] = useState(SHOW_LOADING_SPINNER)

  useEffect(() => {
    userService()
      .then(({data}) => {
        setAttendees({ data })
        setLoader(HIDE_LOADING_SPINNER)
      })
  }, [])
  
  
  return (
    <div className='attendee-list'>
      <header>Attendees</header>
      { loader === SHOW_LOADING_SPINNER && <Spinner /> }
      { attendees.data.map((elm, index) => <Attendee key={index} attendee={elm} />) }
    </div>
  )
}
  
export default AttendeeList
import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Attendee = ({ index, attendee }) => (
  <div className='attendee' key={index}>
    <p className='name'>{attendee.name}</p>
    <a className='email' href={`mailto:=${attendee.email}`}>{attendee.email}</a>
  </div>
)

Attendee.propType = {
  index: PropTypes.number,
  attendee: PropTypes.object.isRequired
}
export default Attendee 
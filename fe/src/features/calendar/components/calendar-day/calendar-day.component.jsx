import React from 'react'

import Event from '../event/Event'

import "./calendar-day.css";

const CalendarDay = () => {
  return (
    <div className='single-day-container'>
      <div className='day-title-container'>
        1
      </div>
      <div className='events-container'>
        {[...Array(5)].map((event) => <Event />)}
      </div>
    </div>
  )
}

export default CalendarDay
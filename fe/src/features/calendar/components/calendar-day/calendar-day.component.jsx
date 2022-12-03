import React from 'react'

import Event from '../event/Event'

import "./calendar-day.css";

const CalendarDay = ({day}) => {
  const {date, events} = day;
  
  //console.log(month);
  return (
    <div className='single-day-container'>
      <div className='day-title-container'>
        {date}
      </div>
      <div className='events-container'>
        {events.map((event) => <Event event={event}/>)}
      </div>
    </div>
  )
}

export default CalendarDay
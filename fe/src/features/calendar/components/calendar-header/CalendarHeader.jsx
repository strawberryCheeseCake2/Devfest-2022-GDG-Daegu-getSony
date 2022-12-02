import React from 'react'
import "./calendar-header.css";

const CalendarHeader = () => {
  return (
    <div className='calendar-header-container'>
      <div className="calendar-header-content-container">
        <span className='month-btn'>{"<"}</span>
        <span className='yy-mm'>2022.12</span>
        <span className='month-btn'>{">"}</span>
      </div>
    </div>
  )
}

export default CalendarHeader
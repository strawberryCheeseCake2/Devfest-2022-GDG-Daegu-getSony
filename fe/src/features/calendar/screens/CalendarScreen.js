import React from 'react'

import CalendarHeader from '../components/calendar-header/CalendarHeader'
import CalendarDay from '../components/calendar-day/calendar-day.component'
import DayOfWeek from '../components/day-of-week/DayOfWeek'

import "./calendar-screen.css";

const CalendarScreen = () => {
  return (
    <>
      <div className='calendar-container'>
        <CalendarHeader />
        <DayOfWeek />
        <div className="day-container">
          {[...Array(31)].map((day) => <CalendarDay />)}
        </div>
      </div>
    </>
  )
}

export default CalendarScreen
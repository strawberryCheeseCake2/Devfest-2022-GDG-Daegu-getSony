import { React, useState } from 'react'

import CalendarHeader from '../components/calendar-header/CalendarHeader'
import CalendarDaysContainer from '../components/calendar-days-container/calendar-days-container.component';
import DayOfWeek from '../components/day-of-week/DayOfWeek'

import "./calendar-screen.css";

const CalendarScreen = () => {
  const [curDay, setCurDay] = useState(new Date())

  return (
    <>
      <div className='calendar-container'>
        <div className='calender-sticky-wrapper'>
          <CalendarHeader curDay={curDay} setCurDay={setCurDay}/>
          <DayOfWeek />
        </div>
        <CalendarDaysContainer curDay={curDay}/>
      </div>
    </>
  )
}

export default CalendarScreen
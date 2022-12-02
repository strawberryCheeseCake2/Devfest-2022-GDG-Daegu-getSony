import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { fetchDays } from '../daysSlice';

import CalendarHeader from '../components/calendar-header/CalendarHeader'
import CalendarDay from '../components/calendar-day/calendar-day.component'
import DayOfWeek from '../components/day-of-week/DayOfWeek'

import "./calendar-screen.css";

const CalendarScreen = () => {
  const dispatch = useDispatch();
  const days = useSelector(state => state.days.days);
  const daysStatus = useSelector(state => state.days.status);
  const error = useSelector(state => state.days.error);

  useEffect(() => {
    if (daysStatus === "idle") {
      console.log("idle fetched days!!")
      dispatch(fetchDays());
      //setCategoryChanged(false)
      console.log(days);
    }
  }, [days, daysStatus, dispatch]);

  return (
    <>
      <div className='calendar-container'>
        <CalendarHeader />
        <DayOfWeek />
        {console.log(days)}
        <div className="day-container">
          {days.map((day) => <CalendarDay day={day}/>)}
        </div>
      </div>
    </>
  )
}

export default CalendarScreen
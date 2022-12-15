import { React, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchCalEvents } from "../../calEventsSlice";
import CalendarDay from "../calendar-day/calendar-day.component";

import "./calendar-days-container.css";

const CalendarDayContainer = ({ curDay }) => {
  /* Fetching Events */
  const dispatch = useDispatch();
  const events = useSelector((state) => state.calEvents.calEvents);
  const eventsStatus = useSelector((state) => state.calEvents.status);
  const error = useSelector((state) => state.calEvents.error);

  useEffect(() => {
    if (eventsStatus === "idle") {
      dispatch(fetchCalEvents());
    }
  }, [events, eventsStatus, dispatch]);

  /* Creating Days */
  const days = [];

  const curMonth = curDay.getMonth();
  const curYear = curDay.getFullYear();

  const weekdayOfFirstDay = new Date(curYear, curMonth, 1).getDay();
  const lastDayDateOfPrevMonth = new Date(curYear, curMonth, 0).getDate();
  //const lastDayOfCurMonth = new Date(curYear, curMonth + 1, 0);
  const lastDayDateOfCurMonth = new Date(curYear, curMonth + 1, 0).getDate();

  let d;

  // Push previous month days
  for (d = 0; d < weekdayOfFirstDay; d++) {
    let date = lastDayDateOfPrevMonth - weekdayOfFirstDay + d + 1;
    const day = {
      month: curMonth,
      date: date,
    };
    days.push(day);
  }

  // Push current month days
  for (d = 1; d <= lastDayDateOfCurMonth; d++) {
    const day = {
      month: curMonth + 1,
      date: d,
    };

    days.push(day);
  }

  console.log(days);
  return (
    <div className="calendar-days-container">
      {console.log(events)}
      {days.map((day, index) => (
        <CalendarDay key={index} day={day} />
      ))}
    </div>
  );
};

export default CalendarDayContainer;

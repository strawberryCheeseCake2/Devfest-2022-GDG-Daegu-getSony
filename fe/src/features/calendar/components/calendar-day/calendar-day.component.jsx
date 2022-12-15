import React from "react";
import { useSelector } from "react-redux";

import Event from "../event/Event";

import "./calendar-day.css";

const CalendarDay = ({ day }) => {
  const eventsStatus = useSelector((state) => state.calEvents.status);
  const calEvents = useSelector((state) => state.calEvents.calEvents);

  const { date, month } = day;
  let eventContent;

  if (eventsStatus === "loading") {
    eventContent = <div>fetching...</div>;
  } else if (eventsStatus === "succeeded") {
    const dayEvents = calEvents.find(
      (event) => event.month == month && event.date == date
    );
    console.log(dayEvents)
    if (dayEvents !== undefined) {
      eventContent = dayEvents.events.map((event, index) => <Event key={index} event={event} />);
    } else {
      eventContent = undefined;
    }
    
    
  }

  return (
    <div className="single-day-container">
      <div className="day-title-container">{date}</div>
      <div className="events-container">{eventContent}</div>
    </div>
  );
};

export default CalendarDay;

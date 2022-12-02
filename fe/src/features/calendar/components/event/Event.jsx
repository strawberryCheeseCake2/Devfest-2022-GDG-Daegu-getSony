import React from "react";

import { Link } from "react-router-dom";

import "./event.css";

const Event = ({event}) => {
  const {eventName, status, eventId} = event;

  return (
    <Link style={{textDecoration: "none"}} 
    className="day_events_single-event-container"
    to={`/event/${eventId}`}>
      <div 
      className="day_events_single-event_icon"
      style={{backgroundColor: (status === "끝") && "#414B5C"}}>
        <span 
        className="day_events_single-event_icon_ch"
        > {status} </span>
      </div>
      <span className="day_events_single-event_name">{eventName}</span>
    </Link>
  );
};

export default Event;

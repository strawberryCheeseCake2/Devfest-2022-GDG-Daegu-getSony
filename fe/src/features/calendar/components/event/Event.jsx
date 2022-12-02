import React from "react";

import "./event.css";

const Event = ({event}) => {
  const {eventName, status} = event;

  return (
    <div className="day_events_single-event-container">
      {console.log("끝" === status)}
      <div 
      className="day_events_single-event_icon"
      style={{backgroundColor: (status === "끝") && "#414B5C"}}>
        <span 
        className="day_events_single-event_icon_ch"
        > {status} </span>
      </div>
      <span className="day_events_single-event_name">{eventName}</span>
    </div>
  );
};

export default Event;

import React from "react";

import EventCard from "../../../../common/event-card/EventCard";

import "./event-recommed-section.css";

const EventRecommendSection = ({ events, setParam }) => {
  return (
    <div className="event-recommend-section__outer-container">
      {events.map((event) => (
        <EventCard key={event.eventId} event={event} setParam={setParam} />
      ))}
    </div>
  );
};

export default EventRecommendSection;

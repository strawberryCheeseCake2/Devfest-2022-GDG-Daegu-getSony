import React from "react";

import "./event-content-section.css";

const EventContentSection = ({ contentImageUrl }) => {
  return (
    <div className="event-content-container">
      <img className="event-content__image" src={contentImageUrl} />
    </div>
  );
};

export default EventContentSection;

import React from "react";
import { Link } from "react-router-dom";

import "./event-card.css";

const EventCard = ({ event, setParam }) => {
  const { eventId, eventLogoUrl, category, eventName, applicantsCount } = event;

  const paramChangeHandler = () => {
    setParam(eventId);
  };

  return (
    <>
      <Link
        to={`/event/${eventId}`}
        style={{ textDecoration: "none" }}
        onClick={paramChangeHandler}
      >
        <div className="event-card-container">
          <div className="event-card__content-container">
            <img
              className="event-card__card-image"
              src={eventLogoUrl}
              alt="event-logo"
            />
            <div
              className={`event-card__category-container--${
                category === "해커톤"
                  ? "hackathon"
                  : category === "학회"
                  ? "society"
                  : category === "코테"
                  ? "test"
                  : "contest"
              }`}
            >
              {category}
            </div>
            <p className="event-card__event-name">{eventName}</p>
            <p className="event-card__applicants-count">
              지원자 수 {applicantsCount}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default EventCard;

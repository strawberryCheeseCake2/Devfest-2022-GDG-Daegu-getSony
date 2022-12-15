import React from "react";

import "./event-info-section.css";

const EventInfoSection = ({
  eventLogo,
  eventName,
  period,
  link,
  applicantCount,
  viewCount,
}) => {
  return (
    <div className="event-info__outer-container">
      <div className="event-info__inner-container">
        <img className="event-info__logo" src={eventLogo} alt="이벤트 로고" />
        <div>
          <h1 className="event-info__event-name">{eventName}</h1>
          <p className="event-info__period">{period}</p>

          <a href={link}>
            <button className="event-info__btn--apply">신청하기</button>
          </a>
          <button className="event-info__btn--share">일정 공유</button>
          <p className="event-info__stat">
            <span style={{ marginLeft: 0 }}>지원자 수 {applicantCount}</span> |
            <span>즐겨찾기 123</span> |<span>공고 조회수 {viewCount}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventInfoSection;

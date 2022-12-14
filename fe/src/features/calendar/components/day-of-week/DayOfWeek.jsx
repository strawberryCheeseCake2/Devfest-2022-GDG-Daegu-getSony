import React from "react";

import "./day-of-week.css";

const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const DayOfWeek = () => {
  return (
    <div className="dow-container">
      {dayOfWeek.map((dow, index) => (
        <div key={index} className="dow-day">
          {dow}
        </div>
      ))}
    </div>
  );
};

export default DayOfWeek;

import React from "react";
import "./calendar-header.css";

const CalendarHeader = ({ curDay, setCurDay }) => {
  const curYear = curDay.getFullYear();
  const curMonth = curDay.getMonth() + 1;

  const prevBtnClickHandler = () => {
    const prevMonthDate = new Date(curYear, curMonth - 2, 1);
    setCurDay(prevMonthDate);
  };

  const nextBtnClickHandler = () => {
    const nextMonthDate = new Date(curYear, curMonth, 1);
    setCurDay(nextMonthDate);
  };

  return (
    <div className="calendar-header-container">
      <div className="calendar-header-content-container">
        <span className="month-btn" onClick={prevBtnClickHandler}>
          {"<"}
        </span>
        <span className="yy-mm">{`${curYear}.${curMonth}`}</span>
        <span className="month-btn" onClick={nextBtnClickHandler}>
          {">"}
        </span>
      </div>
    </div>
  );
};

export default CalendarHeader;

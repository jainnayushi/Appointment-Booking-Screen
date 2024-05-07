import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";

const CustomCalendar = ({ onDateSelect }) => {
  return (
    <div className="custom-calendar">
      <Calendar onChange={onDateSelect} defaultValue={Date.now()} />
    </div>
  );
};

export default CustomCalendar;

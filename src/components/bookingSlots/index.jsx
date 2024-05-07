import React, { useCallback } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const BookingSlots = ({ selectedDate, availableSlots, loading, error }) => {
  // Memoized Slot component for rendering each booking slot
  const Slot = useCallback(
    ({ startTime, endTime }) => (
      <button className="slots-btn">
        {moment(startTime).format("LT")} - {moment(endTime).format("LT")}
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="circle-check"
          size="lg"
        />
      </button>
    ),
    []
  );

  return (
    <div className="slots-container">
      <p className="text">
        {moment(selectedDate).format("dddd, MMMM DD")} - Available slots
      </p>

      {loading ? (
        <p className="loading"></p>
      ) : error ? (
        <p className="error">Something went wrong! Please try again later...</p>
      ) : availableSlots.length ? (
        availableSlots.map((slot, index) => (
          <Slot
            key={index}
            startTime={slot.start_time}
            endTime={slot.end_time}
          />
        ))
      ) : (
        <p className="error">No Booking slot available!</p>
      )}
    </div>
  );
};

export default BookingSlots;

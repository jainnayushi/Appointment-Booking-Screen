import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "./index.css";
import CustomCalendar from "../customCalendar";
import Footer from "../footer";
import BookingSlots from "../bookingSlots";
import { fetchTimeslotsRequest } from "../../redux/actions/bookingAction";

// Function to get formatted start and end dates based on a given date
const getstartEndDate = (dt) => ({
  startDate: moment(dt).format("YYYY-MM-DD"),
  endDate: moment(dt).add(1, "days").format("YYYY-MM-DD"),
});

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const dispatch = useDispatch();

  // Selector to get timeSlots data from Redux store
  const { timeSlots, loading, error } = useSelector(
    (state) => state.timeSlotsData
  );

  // Function to handle date selection
  const handleSelectDate = (dt) => {
    const { startDate, endDate } = getstartEndDate(dt);
    setSelectedDate(dt);
    dispatch(fetchTimeslotsRequest(startDate, endDate));
  };

  // Fetch time slots on component mount and when selectedDate changes
  useEffect(() => {
    const { startDate, endDate } = getstartEndDate(selectedDate);
    dispatch(fetchTimeslotsRequest(startDate, endDate));
  }, [dispatch, selectedDate]);

  return (
    <div className="box-container">
      <div className="box">
        <div className="box-left">
          <div>
            <h3 className="heading-text">Test Service</h3>
            <p>TimeZone: Asia/Calcutta</p>
          </div>
          <div>
            <CustomCalendar onDateSelect={handleSelectDate} />
          </div>
        </div>
        <div className="box-right">
          <p className="text">Select FROM Variant</p>
          <select className="slots-btn">
            <option className="slots-option">60 min</option>
            <option className="slots-option" disabled>
              {" "}
              45 min{" "}
            </option>
            <option className="slots-option" disabled>
              {" "}
              30 min{" "}
            </option>
          </select>
          <hr className="hr" />
          <BookingSlots
            selectedDate={selectedDate}
            availableSlots={timeSlots}
            loading={loading}
            error={error}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookAppointment;

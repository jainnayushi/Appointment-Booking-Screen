import { FETCH_TIMESLOTS_REQUEST } from "../constants";

// Action creator function to create a fetch timeslots request action
export const fetchTimeslotsRequest = (start_date, end_date) => {
  return {
    type: FETCH_TIMESLOTS_REQUEST,
    payload: { start_date, end_date },
  };
};

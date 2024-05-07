import {
  FETCH_TIMESLOTS_REQUEST,
  FETCH_TIMESLOTS_SUCCESS,
  FETCH_TIMESLOTS_FAILURE,
} from "../constants";

// Initial state for the timeSlotsData reducer
const initialState = {
  timeSlots: [],
  loading: false,
  error: null,
};

// Reducer function to manage time slots data state
const timeSlotsData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TIMESLOTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_TIMESLOTS_SUCCESS:
      return { ...state, timeSlots: action.payload, loading: false };
    case FETCH_TIMESLOTS_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default timeSlotsData;

import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_TIMESLOTS_FAILURE,
  FETCH_TIMESLOTS_REQUEST,
  FETCH_TIMESLOTS_SUCCESS,
} from "../constants";

// Endpoint URL for booking slots
const bookingUrl = process.env.REACT_APP_SLOT_BOOKING_URL;

// Saga function to fetch timeslots
function* fetchTimeslots(action) {
  try {
    const { start_date, end_date } = action.payload;
    const response = yield axios.get(bookingUrl, {
      params: { start_date, end_date },
    });
    yield put({
      type: FETCH_TIMESLOTS_SUCCESS,
      payload: response.data[0].slots,
    });
  } catch (error) {
    yield put({ type: FETCH_TIMESLOTS_FAILURE, error: error.message });
  }
}

// Root saga function to watch for fetch timeslots request
function* rootSaga() {
  yield takeLatest(FETCH_TIMESLOTS_REQUEST, fetchTimeslots);
}

export default rootSaga;

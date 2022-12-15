import { configureStore } from '@reduxjs/toolkit'

import calEventsReducer from "./features/calendar/calEventsSlice";

export const store = configureStore({
  reducer: {
    calEvents: calEventsReducer,
  },
})
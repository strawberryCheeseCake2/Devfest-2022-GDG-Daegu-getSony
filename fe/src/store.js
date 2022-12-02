import { configureStore } from '@reduxjs/toolkit'

import daysReducer from "./features/calendar/daysSlice";

export const store = configureStore({
  reducer: {
    days: daysReducer,
  },
})
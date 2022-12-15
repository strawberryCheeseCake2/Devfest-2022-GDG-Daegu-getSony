import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCalEvents = createAsyncThunk("days/fetchCalEvents/", async () => {
  const response = await axios.get(
    "http://localhost:4000/events-list?year=2022&month=12"
  );
 
  return response.data.result;
})

const initialState = {
  calEvents: [],
  status: "idle",
  error: null
}

export const calEventsSlice = createSlice({
  name: "calEvents",
  initialState,
  reducers: {
 
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCalEvents.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCalEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        //const fetchedCalEvents = action.payload;
        
        //state.days = state.days.concat(fetchedDays);
        // console.log("room fetched!")
        // console.log(state.rooms)
        //console.log(action.payload)
        state.calEvents = action.payload;
      })
      .addCase(fetchCalEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  }
});

export default calEventsSlice.reducer
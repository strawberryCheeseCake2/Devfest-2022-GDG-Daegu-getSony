import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDays = createAsyncThunk("days/fetchDays/", async () => {
  const response = await axios.get(
    "http://dev.uksfirstdomain.shop/events-list?year=2022&month=12"
  );
  //console.log(response.data.result);
  return response.data.result;
})

const initialState = {
  days: [],
  status: "idle",
  error: null
}

export const daysSlice = createSlice({
  name: "days",
  initialState,
  reducers: {
 
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDays.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDays.fulfilled, (state, action) => {
        state.status = "succeeded";
        const fetchedDays = action.payload;
        
        //state.days = state.days.concat(fetchedDays);
        // console.log("room fetched!")
        // console.log(state.rooms)
        //console.log(action.payload)
        state.days = action.payload;
      })
      .addCase(fetchDays.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  }
});

export default daysSlice.reducer
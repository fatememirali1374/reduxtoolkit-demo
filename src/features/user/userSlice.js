import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";




export const getAsyncUsers = createAsyncThunk("user/getAsyncUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users")
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
      // in really app error.response.data.message
    }
  })

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: builder => {
    // pending
    builder.addCase(getAsyncUsers.pending, (state, action) => {
      state.loading = true,
        state.data = [],
        state.error = ""

    },)
    // success=>fullfiles
    builder.addCase(getAsyncUsers.fulfilled, (state, action) => {
      state.loading = false,
        state.data = action.payload,
        state.error = ""
    },)
    // rejected
    builder.addCase(getAsyncUsers.rejected, (state, action) => {
      state.loading = false,
        state.data = [],
        state.error = action.payload
    })
  }
})

export default userSlice.reducer
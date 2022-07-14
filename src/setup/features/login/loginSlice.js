import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  isLoading: false,
  token: "",
  errorMessage: "",
}

export const postLoginDetails = createAsyncThunk(
  "login/postLoginDetails",
  (params) => {
    const { email, password } = params

    return axios
      .post("https://reqres.in/api/login", {
        email,
        password,
      })
      .then((response) => Promise.resolve(response.data.token))
      .catch((err) => Promise.reject(err.response.data.error))
  }
)

const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postLoginDetails.pending, (state) => {
      console.log("Pending")
      state.isLoading = true
    })
    builder.addCase(postLoginDetails.fulfilled, (state, action) => {
      console.log("Resolve: ", action.payload)
    })
    builder.addCase(postLoginDetails.rejected, (state, action) => {
      console.log("Rejected: ", action.error.message)
    })
  },
})

export default loginSlice.reducer

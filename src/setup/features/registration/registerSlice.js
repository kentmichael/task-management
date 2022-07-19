import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  isLoading: false,
  token: "",
  id: "",
  errorMessage: "",
}

export const postRegistration = createAsyncThunk(
  "register/postRegistration",
  (params) => {
    const { email, password } = params

    return axios
      .post("https://reqres.in/api/register", {
        email,
        password,
      })
      .then((response) =>
        Promise.resolve({ response: response.data, userDetails: params })
      )
      .catch((err) => Promise.reject(err.message))
  }
)

const registerSlice = createSlice({
  name: "register",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postRegistration.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(postRegistration.fulfilled, (state, action) => {
      alert(
        `Fulfilled: ${JSON.stringify(action.payload.response, null, 2)} 
        User details: ${JSON.stringify(action.payload.userDetails, null, 2)} `
      )

      state.isLoading = false
      state.id = action.payload.id
      state.token = action.payload.token
      state.errorMessage = ""
    })
    builder.addCase(postRegistration.rejected, (state, action) => {
      alert(`Rejected: ${JSON.stringify(action.error, null, 2)}`)

      state.isLoading = false
      state.id = ""
      state.token = ""
      state.errorMessage = action.error.message
    })
  },
})

export default registerSlice.reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const appStore = localStorage.getItem("APP_STORE")
const appStoreObject = appStore ? JSON.parse(appStore) : null

const initialState = appStoreObject?.login ?? {
  isLoading: false,
  email: "",
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
      .then((response) =>
        Promise.resolve({ email, token: response.data.token })
      )
      .catch((err) => Promise.reject(err.response.data.error))
  }
)

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      // newly created accounts
    },
    logout: (state, action) => {
      state.isLoading = false
      state.email = ""
      state.token = ""
      state.errorMessage = ""
      localStorage.removeItem("APP_SESSION")
      // then navigate to login page
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postLoginDetails.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(postLoginDetails.fulfilled, (state, action) => {
      state.isLoading = false
      state.email = action.payload.email
      state.token = action.payload.token
      state.errorMessage = ""
      localStorage.setItem(
        "APP_SESSION",
        JSON.stringify({
          token: state.token,
        })
      )
    })
    builder.addCase(postLoginDetails.rejected, (state, action) => {
      state.isLoading = false
      state.email = ""
      state.token = ""
      state.errorMessage = action.error.message
    })
  },
})

export default loginSlice.reducer
export const { logout } = loginSlice.actions

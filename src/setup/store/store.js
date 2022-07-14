import { configureStore } from "@reduxjs/toolkit"
import AppDataReducer from "@/setup/features/app-data/appDataSlice"
import LoginReducer from "@/setup/features/login/loginSlice"

const store = configureStore({
  reducer: {
    appData: AppDataReducer,
    login: LoginReducer,
  },
})

// Create async request to two api endpoints
// Use native promise and axios

store.subscribe(() => {
  const APP_STORE = store.getState()
  console.log("Store:", APP_STORE)
})

export default store

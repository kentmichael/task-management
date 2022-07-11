import { configureStore } from "@reduxjs/toolkit"
import AppDataReducer from "@/setup/features/app-data/appDataSlice"

const store = configureStore({
  reducer: {
    appData: AppDataReducer,
  },
})

// Create async request to two api endpoints
// Use native promise and axios

export default store

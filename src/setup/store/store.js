import { configureStore } from "@reduxjs/toolkit"
import LoginReducer from "@/setup/features/login/loginSlice"
import UsersReducer from "@/setup/features/users/usersSlice"
import RegisterReducer from "@/setup/features/registration/registerSlice"

const store = configureStore({
  reducer: {
    login: LoginReducer,
    users: UsersReducer,
    register: RegisterReducer,
  },
})

store.subscribe(() => {
  const APP_STORE = store.getState()
  localStorage.setItem("APP_STORE", JSON.stringify(APP_STORE))
})

export default store

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const appDataStorage = localStorage.getItem("tsk-mngmt-app-data")
const initialValue = appDataStorage ?? {
  isLoading: false,
  data: {},
  errorMessage: "",
}

const initialState = initialValue

export const fetchData = createAsyncThunk(
  "appData/fetchData",
  async (userId) => {
    const user = axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((results) => results.data)
      .catch((error) => Promise.reject(error))

    const todos = axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((results) => results.data)
      .catch((error) => Promise.reject(error))

    const results = await Promise.all([user, todos])
      .then((arrResults) => arrResults)
      .catch((err) => err.message)

    return typeof results === "string"
      ? Promise.reject(results)
      : Promise.resolve(results)
  }
)

const appDataSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {
    setDataFromLocalStorage: (state, action) => {},

    addBorder: (state, action) => {},
    editBorder: (state, action) => {},
    deleteBorder: (state, action) => {},

    addColumn: (state, action) => {},
    editColumn: (state, action) => {},
    deleteColumn: (state, action) => {},

    addTask: (state, action) => {},
    editTask: (state, action) => {},
    deleteTask: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = {
        user: action.payload[0],
        boards: [
          {
            id: 1,
            name: "todos",
            columns: [
              {
                id: 1,
                colName: "pending",
                tasks: action.payload[1].filter((todo) => {
                  if (todo.completed === false)
                    return {
                      ...todo,
                      status: "pending",
                    }
                }),
              },
              {
                id: 2,
                colName: "completed",
                tasks: action.payload[1].filter((todo) => {
                  if (todo.completed === true)
                    return {
                      ...todo,
                      status: "completed",
                    }
                }),
              },
            ],
          },
        ],
      }
      state.errorMessage = ""
    })
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false
      state.data = {}
      state.errorMessage = action.error.message
    })
  },
})

export default appDataSlice.reducer

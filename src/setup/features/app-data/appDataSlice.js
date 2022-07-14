import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialValue = {
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

    addBoard: (state, action) => {
      state.data = {
        ...state.data,
        boards: state.data.boards.concat({
          boardId: state.data.boards[state.data.boards.length - 1].boardId + 1,
          boardName: action.payload.boardName,
          columns: action.payload.columns.map((column, idx) => {
            return {
              columnId: idx + 1,
              columnName: column.columnName,
              tasks: [],
            }
          }),
        }),
      }
    },
    editBoard: (state, action) => {
      state.data = {
        ...state.data,
        boards: state.data.boards.map((board) => {
          if (board.boardId === action.payload.selectedBoard) {
            return {
              boardId: board.boardId,
              boardName: action.payload.values.boardName,
              columns: action.payload.values.columns.map((column, idx) => {
                return {
                  columnId: idx + 1,
                  columnName: column.columnName,
                  tasks: column.tasks ?? [],
                }
              }),
            }
          }
          return board
        }),
      }
    },
    deleteBoard: (state, action) => {
      state.data = {
        ...state.data,
        boards: state.data.boards.filter(
          (board) => board.boardId !== action.payload
        ),
      }
    },

    addTask: (state, action) => {
      state.data = {
        ...state.data,
        boards: state.data.boards.map((board) => {
          if (board.boardId === action.payload.selectedBoard) {
            return {
              ...board,
              columns: board.columns.map((column) => {
                if (
                  action.payload.values.status.toLowerCase() ===
                  column.columnName.toLowerCase()
                ) {
                  return {
                    ...column,
                    tasks: column.tasks.concat({
                      taskId:
                        (column.tasks[column.tasks?.length - 1]?.taskId ?? 0) +
                        1,
                      taskTitle: action.payload.values.taskTitle,
                      status: action.payload.values.status,
                    }),
                  }
                }
                return column
              }),
            }
          }
          return board
        }),
      }
    },
    editTask: (state, action) => {
      state.data = {
        ...state.data,
        boards: state.data.boards.map((board) => {
          if (board.boardId === action.payload.selectedBoard) {
            return {
              ...board,
              columns: board.columns.map((column) => {
                if (column.columnId === action.payload.columnId) {
                  return {
                    ...column,
                    tasks:
                      action.payload.values.status.toLowerCase() !==
                      column.columnName.toLowerCase()
                        ? column.tasks.filter(
                            (task) => task.taskId !== action.payload.taskId
                          )
                        : column.tasks.map((task) => {
                            if (task.taskId === action.payload.taskId) {
                              return {
                                ...task,
                                taskTitle: action.payload.values.taskTitle,
                                status: action.payload.values.status,
                              }
                            }
                            return task
                          }),
                  }
                }

                if (
                  action.payload.values.status.toLowerCase() ===
                  column.columnName.toLowerCase()
                ) {
                  return {
                    ...column,
                    tasks: column.tasks.concat({
                      taskId:
                        (column.tasks[column.tasks?.length - 1]?.taskId ?? 0) +
                        1,
                      taskTitle: action.payload.values.taskTitle,
                      status: action.payload.values.status,
                    }),
                  }
                }

                return column
              }),
            }
          }
          return board
        }),
      }
    },
    deleteTask: (state, action) => {
      state.data = {
        ...state.data,
        boards: state.data.boards.map((board) => {
          if (board.boardId === action.payload.selectedBoard) {
            return {
              ...board,
              columns: board.columns.map((column) => {
                if (column.columnId === action.payload.columnId) {
                  return {
                    ...column,
                    tasks: column.tasks.filter(
                      (task) => task.taskId !== action.payload.taskId
                    ),
                  }
                }
                return column
              }),
            }
          }

          return board
        }),
      }
    },
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
            boardId: 1,
            boardName: "todos",
            columns: [
              {
                columnId: 1,
                columnName: "pending",
                tasks: action.payload[1]
                  .filter((todo) => todo.completed === false)
                  .map((todo, idx) => ({
                    taskId: idx + 1,
                    taskTitle: todo.title,
                    status: "pending",
                  })),
              },
              {
                columnId: 2,
                columnName: "completed",
                tasks: action.payload[1]
                  .filter((todo) => todo.completed === true)
                  .map((todo, idx) => ({
                    taskId: idx + 1,
                    taskTitle: todo.title,
                    status: "completed",
                  })),
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
export const {
  addBoard,
  editBoard,
  deleteBoard,
  addTask,
  editTask,
  deleteTask,
} = appDataSlice.actions

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const appStore = localStorage.getItem("APP_STORE")
const appStoreObject = appStore ? JSON.parse(appStore) : null

const initialState = appStoreObject?.users ?? {
  isLoading: "false",
  userList: [],
  errorMessage: "",
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const usersPage1 = axios
    .get("https://reqres.in/api/users?page=1")
    .then((results) => results.data.data)
    .catch((err) => Promise.reject(err))
  const usersPage2 = axios
    .get("https://reqres.in/api/users?page=2")
    .then((results) => results.data.data)
    .catch((err) => Promise.reject(err))

  const result = await Promise.all([usersPage1, usersPage2])
    .then((arrResults) => arrResults.flat())
    .catch((err) => err.message)

  return typeof result === "string"
    ? Promise.reject(result)
    : Promise.resolve(result)
})

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const {
        activeUser: { id },
        values: { boardName, columns },
      } = action.payload

      state.userList = state.userList.map((user) => {
        if (user.id === id) {
          const boards = user.boards ?? []

          return {
            ...user,
            boards: boards.concat({
              boardId: boards.length
                ? boards[boards.length - 1].boardId + 1
                : 1,
              boardName,
              columns: columns.map((column, idx) => {
                return {
                  columnId: idx + 1,
                  columnName: column.columnName,
                  tasks: [],
                }
              }),
            }),
          }
        }

        return user
      })
    },
    editBoard: (state, action) => {
      const {
        selectedBoard,
        values: { boardName, columns },
        activeUser,
      } = action.payload

      state.userList = state.userList.map((user) => {
        if (user.id === activeUser.id) {
          return {
            ...user,
            boards: user.boards.map((board) => {
              if (board.boardId === selectedBoard) {
                return {
                  ...board,
                  boardName,
                  columns: columns.map((column, idx) => {
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
        }

        return user
      })
    },
    deleteBoard: (state, action) => {
      const {
        activeUser: { id },
        selectedBoard,
      } = action.payload

      state.userList = state.userList.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            boards: user.boards.filter(
              (board) => board.boardId !== selectedBoard
            ),
          }
        }

        return user
      })
    },

    addTask: (state, action) => {
      const {
        selectedBoard,
        values: { taskTitle, status, assignee },
        activeUser: { id, first_name, last_name, email, boards },
      } = action.payload

      state.userList = state.userList.map((user) => {
        // add task to user with email === assignee
        if (user.email === assignee) {
          const userBoard = boards.find(
            (board) => board.boardId === selectedBoard
          )
          const { boardName } = userBoard
          const hasBoard = user.boards?.some(
            (board) => board.boardName === boardName
          )

          const userBoards = user.boards ?? []

          return hasBoard
            ? // if the assignee has existing board
              {
                ...user,
                boards: user.boards.map((board) => {
                  if (board.boardName === boardName) {
                    const hasColumns = board.columns.some(
                      (column) => column.columnName === status
                    )

                    return {
                      ...board,
                      columns: hasColumns
                        ? board.columns.map((column) => {
                            if (column.columnName === status) {
                              return {
                                ...column,
                                tasks: column.tasks.concat({
                                  taskId:
                                    (column.tasks[column.tasks.length - 1]
                                      ?.taskId ?? 0) + 1,
                                  taskTitle,
                                  status,
                                  assignee,
                                  createdBy: `${first_name} ${last_name} - ${email}`,
                                  assignedBy: email,
                                }),
                              }
                            }

                            return column
                          })
                        : board.columns.concat({
                            columnId:
                              board.columns[board.columns.length - 1].columnId +
                              1,
                            columnName: status,
                            tasks: [
                              {
                                taskId: 1,
                                taskTitle,
                                status,
                                assignee,
                                createdBy: `${first_name} ${last_name} - ${email}`,
                                assignedBy: email,
                              },
                            ],
                          }),
                    }
                  }

                  return board
                }),
              }
            : // assignee has no board
              // create board, create column and assign task
              {
                ...user,
                boards: userBoards.concat({
                  boardId: userBoards.length
                    ? userBoards[userBoards.length - 1].boardId + 1
                    : 1,
                  boardName,
                  columns: [
                    {
                      columnId: 1,
                      columnName: status,
                      tasks: [
                        {
                          taskId: 1,
                          taskTitle,
                          status,
                          assignee,
                          createdBy: `${first_name} ${last_name} - ${email}`,
                          assignedBy: email,
                        },
                      ],
                    },
                  ],
                }),
              }
        }

        return user
      })
    },
    editTask: (state, action) => {
      const {
        values: { taskTitle, status, assignee },
        selectedBoard,
        columnId,
        taskId,
        activeUser: { id, email, boards },
      } = action.payload

      const b = boards.find((board) => board.boardId === selectedBoard)
      const c = b.columns.find((column) => column.columnId === columnId)
      const t = c.tasks.find((task) => task.taskId === taskId)
      const createdBy = t.createdBy

      state.userList = state.userList.map((user) => {
        // update applies to the current user
        if (user.id === id) {
          return {
            ...user,
            boards: user.boards.map((board) => {
              if (board.boardId === selectedBoard) {
                return {
                  ...board,
                  columns: board.columns.map((column) => {
                    if (column.columnId === columnId) {
                      return {
                        ...column,
                        tasks:
                          column.columnName === status
                            ? user.email === assignee
                              ? column.tasks.map((task) => {
                                  if (task.taskId === taskId) {
                                    return {
                                      ...task,
                                      taskTitle,
                                      status,
                                    }
                                  }

                                  return task
                                })
                              : column.tasks.filter(
                                  (task) => task.taskId !== taskId
                                )
                            : column.tasks.filter(
                                (task) => task.taskId !== taskId
                              ),
                      }
                    }

                    if (
                      column.columnName === status &&
                      user.email === assignee
                    ) {
                      return {
                        ...column,
                        tasks: column.tasks.concat({
                          taskId:
                            (column.tasks[column.tasks?.length - 1]?.taskId ??
                              0) + 1,
                          taskTitle,
                          status,
                          assignee,
                          createdBy,
                          assignedBy: email,
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
        }

        // update applies to other user
        if (user.email === assignee && user.id !== id) {
          // check if user has board
          const userBoard = boards.find(
            (board) => board.boardId === selectedBoard
          )
          const { boardName } = userBoard
          const hasBoard = user.boards?.some(
            (board) => board.boardName === boardName
          )

          const userBoards = user.boards ?? []

          return hasBoard
            ? // board exist
              {
                ...user,
                boards: user.boards.map((board) => {
                  if (board.boardName === boardName) {
                    const hasColumns = board.columns.some(
                      (column) => column.columnName === status
                    )

                    return {
                      ...board,
                      columns: hasColumns
                        ? board.columns.map((column) => {
                            if (column.columnName === status) {
                              return {
                                ...column,
                                tasks: column.tasks.concat({
                                  taskId:
                                    (column.tasks[column.tasks.length - 1]
                                      ?.taskId ?? 0) + 1,
                                  taskTitle,
                                  status,
                                  assignee,
                                  createdBy,
                                  assignedBy: email,
                                }),
                              }
                            }

                            return column
                          })
                        : board.columns.concat({
                            columnId:
                              (board.columns?.[board.columns.length - 1]
                                .columnId ?? 0) + 1,
                            columnName: status,
                            tasks: [
                              {
                                taskId: 1,
                                taskTitle,
                                status,
                                assignee,
                                createdBy: createdBy,
                                assignedBy: email,
                              },
                            ],
                          }),
                    }
                  }

                  return board
                }),
              }
            : // create new board
              {
                ...user,
                boards: userBoards.concat({
                  boardId: userBoards.length
                    ? userBoards[userBoards.length - 1].boardId + 1
                    : 1,
                  boardName,
                  columns: [
                    {
                      columnId: 1,
                      columnName: status,
                      tasks: [
                        {
                          taskId: 1,
                          taskTitle,
                          status,
                          assignee,
                          createdBy: createdBy,
                          assignedBy: email,
                        },
                      ],
                    },
                  ],
                }),
              }
        }

        return user
      })
    },
    deleteTask: (state, action) => {
      const {
        selectedBoard,
        columnId,
        taskId,
        activeUser: { id },
      } = action.payload

      state.userList = state.userList.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            boards: user.boards.map((board) => {
              if (board.boardId === selectedBoard) {
                return {
                  ...board,
                  columns: board.columns.map((column) => {
                    if (column.columnId === columnId) {
                      return {
                        ...column,
                        tasks: column.tasks.filter(
                          (task) => task.taskId !== taskId
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
        }

        return user
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.userList = action.payload
      state.errorMessage = ""
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false
      state.userList = []
      state.errorMessage = action.error.message
    })
  },
})

export default usersSlice.reducer
export const {
  addBoard,
  editBoard,
  deleteBoard,
  addTask,
  editTask,
  deleteTask,
} = usersSlice.actions

import React, { useState } from "react"
import { useSelector } from "react-redux"
import StyledStackMain from "./styles/StyledStackMain"
import StyledGridContainer from "./styles/StyledGridContainer"
import StyledGridItem from "./styles/StyledGridItem"
import StyledColumnTitle from "./styles/StyledColumnTitle"
import StyledPaperTask from "./styles/StyledPaperTask"
import StyledPaperTitle from "./styles/StyledPaperTitle"
import useModal from "@/hooks/useModal"
import TaskModal from "@/common/modal/task"
import { Stack } from "@mui/material"

const MainBody = ({ openSideNav, selectedBoard }) => {
  const appData = useSelector((state) => state.appData)
  const {
    isLoading,
    data: { boards },
    errorMessage,
  } = appData
  const [taskId, setTaskId] = useState()
  const [columnId, setcolumnId] = useState()
  const [openModalTask, toggleModalTask] = useModal()

  const selectedTaskId = (id) => {
    setTaskId(id)
  }

  const selectedColumnId = (id) => {
    setcolumnId(id)
  }

  return (
    <StyledStackMain openSideNav={openSideNav}>
      <StyledGridContainer>
        {isLoading ? (
          <h3>Loading data..</h3>
        ) : errorMessage ? (
          <h3>{errorMessage}</h3>
        ) : (
          boards?.map((board) => {
            if (board.boardId === selectedBoard) {
              {
                return board.columns.map((column) => {
                  return (
                    <StyledGridItem key={column.columnId}>
                      <StyledColumnTitle>
                        {column.columnName} ({column.tasks.length})
                      </StyledColumnTitle>
                      <Stack
                        sx={{
                          gap: "10px",
                          borderRadius: "5px",
                          padding: "10px",
                          backgroundColor: "#eeeeee",
                        }}
                      >
                        {column.tasks
                          .map((task) => {
                            return (
                              <StyledPaperTask
                                key={task.taskId}
                                toggleModalTask={toggleModalTask}
                                selectedTaskId={selectedTaskId}
                                selectedColumnId={selectedColumnId}
                                columnId={column.columnId}
                                taskId={task.taskId}
                              >
                                <StyledPaperTitle>
                                  {task.taskTitle}
                                </StyledPaperTitle>
                              </StyledPaperTask>
                            )
                          })
                          .reverse()}
                      </Stack>
                    </StyledGridItem>
                  )
                })
              }
            }
          })
        )}
      </StyledGridContainer>
      <TaskModal
        open={openModalTask}
        toggleModalTask={toggleModalTask}
        selectedBoard={selectedBoard}
        type="edit"
        taskId={taskId}
        columnId={columnId}
      />
    </StyledStackMain>
  )
}

export default MainBody

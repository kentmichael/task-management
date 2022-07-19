import React, { useState } from "react"
import { useSelector } from "react-redux"
import useModal from "@/hooks/useModal"
import TaskModal from "@/common/modal/task"

import StyledStackMain from "./styles/StyledStackMain"
import StyledGridContainer from "./styles/StyledGridContainer"
import StyledGridItem from "./styles/StyledGridItem"
import StyledColumnTitle from "./styles/StyledColumnTitle"
import StyledPaperTask from "./styles/StyledPaperTask"
import StyledPaperTitle from "./styles/StyledPaperTitle"
import StyledPaperNotes from "./styles/StyledPaperNotes"
import StyledStackColumnBackground from "./styles/StyledStackColumnBackground"

const MainBody = ({ openSideNav, selectedBoard, activeUser }) => {
  const users = useSelector((state) => state.users)
  const { isLoading, errorMessage } = users

  const [taskId, setTaskId] = useState()
  const [columnId, setcolumnId] = useState()
  const [openModalTask, toggleModalTask] = useModal()

  const selectedTaskId = (id) => setTaskId(id)
  const selectedColumnId = (id) => setcolumnId(id)

  return (
    <StyledStackMain openSideNav={openSideNav}>
      <StyledGridContainer>
        {isLoading ? (
          <h3>Loading data..</h3>
        ) : errorMessage ? (
          <h3>{errorMessage}</h3>
        ) : (
          activeUser?.boards?.map((board) => {
            if (board.boardId === selectedBoard) {
              {
                return board.columns.map((column) => {
                  return (
                    <StyledGridItem key={column.columnId}>
                      <StyledColumnTitle>
                        {column.columnName} ({column.tasks.length})
                      </StyledColumnTitle>
                      <StyledStackColumnBackground>
                        {column.tasks
                          .map((task) => {
                            const { taskId, taskTitle, assignedBy, createdBy } =
                              task

                            return (
                              <StyledPaperTask
                                key={taskId}
                                toggleModalTask={toggleModalTask}
                                selectedTaskId={selectedTaskId}
                                selectedColumnId={selectedColumnId}
                                columnId={column.columnId}
                                taskId={taskId}
                              >
                                <StyledPaperTitle>
                                  Title - {taskTitle}
                                </StyledPaperTitle>
                                <hr />
                                <StyledPaperNotes>
                                  Assigned by: {assignedBy} <br />
                                  Created by: {createdBy} <br />
                                </StyledPaperNotes>
                              </StyledPaperTask>
                            )
                          })
                          .reverse()}
                      </StyledStackColumnBackground>
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
        activeUser={activeUser}
      />
    </StyledStackMain>
  )
}

export default MainBody

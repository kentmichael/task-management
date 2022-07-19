import React from "react"
import { useDispatch } from "react-redux"
// import { deleteTask } from "@/setup/features/app-data/appDataSlice"
import { deleteBoard, deleteTask } from "@/setup/features/users/usersSlice"

import StyledDialog from "./styles/StyledDialog"
import StyledDialogTitle from "./styles/StyledDialogTitle"
import StyledDialogActions from "./styles/StyledDialogActions"
import StyledDialogContent from "./styles/StyledDialogActions"
import StyledButtonDelete from "./styles/StyledButtonDelete"
import StyledButtonCancel from "./styles/StyledButtonCancel"

const ConfirmationModal = (props) => {
  const {
    open,
    toggleModalConfirm,
    type,
    selectedBoard,
    toggleModalTask,
    handleClose,
    taskId,
    columnId,
    activeUser,
  } = props
  const dispatch = useDispatch()
  const board = activeUser?.boards?.find(
    (board) => board.boardId === selectedBoard
  )
  const columns = board?.columns.find((column) => column.columnId === columnId)
  const task = columns?.tasks.find((task) => task.taskId === taskId)

  const deleteSelectedBoard = () => {
    dispatch(deleteBoard({ selectedBoard, activeUser }))
    toggleModalConfirm(false)
  }

  const deleteSelectedTask = () => {
    dispatch(deleteTask({ selectedBoard, columnId, taskId, activeUser }))

    toggleModalConfirm(false)
    handleClose()
    toggleModalTask(false)
  }

  return (
    <StyledDialog open={open}>
      <StyledDialogTitle toggleModalConfirm={toggleModalConfirm} type={type} />
      <StyledDialogContent>
        {type === "board"
          ? `
            Are you sure you want to delete the "${board?.boardName}" board? This action will remove all columns and tasks and cannot be
            reversed.
          `
          : `Are you sure you want to delete the "${task?.taskTitle}" task? This action will remove the task and cannot be reversed.`}
      </StyledDialogContent>
      <StyledDialogActions>
        <StyledButtonDelete
          onClick={type === "board" ? deleteSelectedBoard : deleteSelectedTask}
        >
          Delete
        </StyledButtonDelete>
        <StyledButtonCancel toggleModalConfirm={toggleModalConfirm}>
          Cancel
        </StyledButtonCancel>
      </StyledDialogActions>
    </StyledDialog>
  )
}

export default ConfirmationModal

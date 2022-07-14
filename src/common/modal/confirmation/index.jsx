import React from "react"
import { useSelector, useDispatch } from "react-redux"
import StyledDialog from "./styles/StyledDialog"
import StyledDialogTitle from "./styles/StyledDialogTitle"
import StyledDialogActions from "./styles/StyledDialogActions"
import StyledDialogContent from "./styles/StyledDialogActions"
import StyledButtonDelete from "./styles/StyledButtonDelete"
import StyledButtonCancel from "./styles/StyledButtonCancel"
import { deleteBoard, deleteTask } from "@/setup/features/app-data/appDataSlice"

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
  } = props
  const appData = useSelector((state) => state.appData)
  const {
    data: { boards },
  } = appData
  const dispatch = useDispatch()
  const board = boards?.find((board) => board.id === selectedBoard)

  const deleteSelectedBoard = () => {
    dispatch(deleteBoard(selectedBoard))
    toggleModalConfirm(false)
  }

  const deleteSelectedTask = () => {
    dispatch(deleteTask({ selectedBoard, columnId, taskId }))

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
            Are you sure you want to delete the ${board?.name} board? This action will remove all columns and tasks and cannot be
            reversed.
          `
          : `Are you sure you want to delete the "name" Task? This action will remove the task and cannot be reversed.`}
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

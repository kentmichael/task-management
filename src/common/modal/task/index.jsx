import React from "react"
import StyledDialog from "./styles/StyledDialog"
import StyledDialogTitle from "./styles/StyledDialogTitle"
import StyledDialogActions from "./styles/StyledDialogActions"
import StyledButtonCreateTask from "./styles/StyledButtonCreateTask"
import StyledFormControl from "./styles/StyledFormControl"
import StyledTextField from "./styles/StyledTextField"
import StyledAutocompleteStatus from "./styles/StyledAutocompleteStatus"
import DialogContent from "@mui/material/DialogContent"

const TaskModal = (props) => {
  const { open, toggleModalTask, type } = props

  return (
    <StyledDialog open={open}>
      <StyledDialogTitle toggleModalTask={toggleModalTask} type={type} />
      <DialogContent>
        <StyledFormControl>
          <StyledTextField id="task-title" label="Task Title" />
          <StyledAutocompleteStatus />
        </StyledFormControl>
      </DialogContent>
      <StyledDialogActions>
        <StyledButtonCreateTask>Create Task</StyledButtonCreateTask>
      </StyledDialogActions>
    </StyledDialog>
  )
}

export default TaskModal

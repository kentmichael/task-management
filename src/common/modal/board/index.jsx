import React, { useState } from "react"
import StyledDialog from "./styles/StyledDialog"
import StyledDialogTitle from "./styles/StyledDialogTitle"
import StyledFormControl from "./styles/StyledFormControl"
import StyledDialogActions from "./styles/StyledDialogActions"
import StyledTextField from "./styles/StyledTextField"
import StyledButtonCreateBoard from "./styles/StyledButtonCreateBoard"
import DialogContent from "@mui/material/DialogContent"

const BoardModal = (props) => {
  const { open, toggleModal, type } = props
  const [addtlColumn, setAddtlColumn] = useState(0)

  const addColumn = () => {
    console.log("what", addtlColumn)
    setAddtlColumn((prevCount) => prevCount + 1)
  }

  // in edit modal
  // loop through columns show column names, delete column

  // in add modal
  // show new text field when user click add column

  return (
    <StyledDialog open={open}>
      <StyledDialogTitle
        toggleModal={toggleModal}
        type={type}
      ></StyledDialogTitle>

      <DialogContent>
        <StyledFormControl>
          <StyledTextField id="board-name" label="Board Name" />
          <StyledTextField id="column-name" label="Column Name" />
        </StyledFormControl>
      </DialogContent>

      <StyledDialogActions>
        {type === "edit" ? null : (
          <StyledButtonCreateBoard withIcon={true} addColumn={addColumn}>
            Add New Column
          </StyledButtonCreateBoard>
        )}

        <StyledButtonCreateBoard variant="contained">
          {type === "edit" ? "Update Board" : "Create New Board"}
        </StyledButtonCreateBoard>
      </StyledDialogActions>
    </StyledDialog>
  )
}

export default BoardModal

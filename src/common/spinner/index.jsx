import React from "react"

import CircularProgress from "@mui/material/CircularProgress"
import StyledDialog from "./styles/StyledDialog"

const Spinner = ({ open }) => {
  return (
    <StyledDialog open={open}>
      <CircularProgress />
    </StyledDialog>
  )
}

export default Spinner

import React from "react"

import StyledDialog from "./styles/StyledDialog"
import StyledDialogTitle from "./styles/StyledDialogTitle"
import StyledDialogContent from "./styles/StyledDialogContent"
import StyledDialogActions from "./styles/StyledDialogActions"
import StyledCancelButton from "./styles/StyledCancelButton"
import StyledSignoutButton from "./styles/StyledSignoutButton"

const SignoutModal = (props) => {
  const { open, toggleSignoutModal, logoutHandler } = props

  return (
    <StyledDialog open={open} toggleSignoutModal={toggleSignoutModal}>
      <StyledDialogTitle>Sign out</StyledDialogTitle>
      <StyledDialogContent>
        Are you sure you want to sign out?
      </StyledDialogContent>
      <StyledDialogActions>
        <StyledCancelButton toggleSignoutModal={toggleSignoutModal}>
          Cancel
        </StyledCancelButton>
        <StyledSignoutButton logoutHandler={logoutHandler}>
          Sign out
        </StyledSignoutButton>
      </StyledDialogActions>
    </StyledDialog>
  )
}

export default SignoutModal

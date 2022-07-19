import React from "react"
import { useNavigate } from "react-router-dom"
import useModal from "@/hooks/useModal"
import SignoutModal from "@/common/modal/sign-out"
import { logout } from "@/setup/features/login/loginSlice"
import { useDispatch } from "react-redux"

import StyledDialog from "./styles/StyledDialog"
import StyledDialogTitle from "./styles/StyledDialogTitle"
import StyledDialogContent from "./styles/StyledDialogContent"
import StyledDialogActions from "./styles/StyledDialogActions"
import StyledButtonLogout from "./styles/StyledButtonLogout"
import StyledTextField from "./styles/StyledTextField"

const AccountModal = ({ open, toggleModalAccountSettings, activeUser }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [signoutModal, toggleSignoutModal] = useModal()

  const logoutHandler = () => {
    navigate("/task-management/login", { replace: true })
    dispatch(logout())
    toggleSignoutModal(false)
    toggleModalAccountSettings(false)
  }

  return (
    <>
      <StyledDialog
        open={open}
        toggleModalAccountSettings={toggleModalAccountSettings}
      >
        <StyledDialogTitle
          toggleModalAccountSettings={toggleModalAccountSettings}
        />
        <StyledDialogContent>
          <StyledTextField
            label="First name"
            value={activeUser?.first_name ?? ""}
          ></StyledTextField>
          <StyledTextField
            label="Last name"
            value={activeUser?.last_name ?? ""}
          ></StyledTextField>
          <StyledTextField
            label="Email address"
            value={activeUser?.email ?? ""}
          ></StyledTextField>
        </StyledDialogContent>
        <StyledDialogActions>
          <StyledButtonLogout toggleSignoutModal={toggleSignoutModal}>
            Sign out
          </StyledButtonLogout>
        </StyledDialogActions>
      </StyledDialog>

      <SignoutModal
        open={signoutModal}
        toggleSignoutModal={toggleSignoutModal}
        logoutHandler={logoutHandler}
      />
    </>
  )
}

export default AccountModal

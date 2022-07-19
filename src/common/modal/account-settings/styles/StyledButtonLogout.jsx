import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import LogoutIcon from "@mui/icons-material/Logout"

const StyledButtonLogout = styled(Button)(({ theme }) => ({
  color: "#fff",
}))

export default function StyledCustomization({ toggleSignoutModal, children }) {
  return (
    <StyledButtonLogout
      variant="contained"
      color="warning"
      startIcon={<LogoutIcon />}
      onClick={() => toggleSignoutModal(true)}
    >
      {children}
    </StyledButtonLogout>
  )
}

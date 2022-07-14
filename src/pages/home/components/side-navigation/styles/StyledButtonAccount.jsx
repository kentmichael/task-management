import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"
import { styled } from "@mui/material/styles"

const StyledButtonAccount = styled(Button)(({ theme }) => ({
  fontSize: "12px",
}))

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: "30px",
  height: "30px",
}))

export default function StyledCustomization() {
  return (
    <StyledButtonAccount
      startIcon={<StyledAvatar />}
      color="primary"
      variant="filled"
    >
      Account Settings
    </StyledButtonAccount>
  )
}

import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"
import { styled } from "@mui/material/styles"

const StyledButtonAccount = styled(Button)(({ theme }) => ({
  fontSize: "12px",
}))

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: "30px",
  height: "30px",
  marginRight: "4px",
}))

export default function StyledCustomization({
  activeUser,
  toggleModalAccountSettings,
}) {
  return (
    <StyledButtonAccount
      startIcon={<StyledAvatar src={activeUser?.avatar} />}
      color="primary"
      variant="filled"
      onClick={() => toggleModalAccountSettings(true)}
    >
      Account Settings
    </StyledButtonAccount>
  )
}

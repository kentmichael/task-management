import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"

const StyledSignoutButton = styled(Button)(({ theme }) => ({}))

export default function StyledCustomization({ logoutHandler, children }) {
  return (
    <StyledSignoutButton
      variant="contained"
      color="error"
      onClick={logoutHandler}
    >
      {children}
    </StyledSignoutButton>
  )
}

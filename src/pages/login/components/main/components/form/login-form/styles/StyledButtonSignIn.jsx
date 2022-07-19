import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"

const StyledButtonSignIn = styled(Button)(({ theme }) => ({
  color: "#fff",
}))

export default function StyledCustomization({ disabled, onClick, children }) {
  return (
    <StyledButtonSignIn
      color="success"
      variant="contained"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButtonSignIn>
  )
}

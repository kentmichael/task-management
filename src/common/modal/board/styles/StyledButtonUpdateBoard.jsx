import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"

const StyledButtonUpdateBoard = styled(Button)(({ theme }) => ({
  width: "100%",
  margin: 0,
  fontSize: "12px",
}))

export default function StyledCustomization({ onClick, disabled, children }) {
  return (
    <StyledButtonUpdateBoard
      variant="contained"
      color="warning"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButtonUpdateBoard>
  )
}

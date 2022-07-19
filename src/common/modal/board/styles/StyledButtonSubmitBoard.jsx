import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"

const StyledButtonSubmitBoard = styled(Button)(({ theme }) => ({
  color: "#fff",
  width: "100%",
  margin: 0,
  fontSize: "12px",
}))

export default function StyledCustomization({
  type,
  onClick,
  disabled,
  children,
}) {
  return (
    <StyledButtonSubmitBoard
      variant="contained"
      color={type === "edit" ? "warning" : "success"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButtonSubmitBoard>
  )
}

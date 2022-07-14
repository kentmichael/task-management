import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import { styled } from "@mui/material/styles"

const StyledButtonAddFieldColumn = styled(Button)(({ theme }) => ({
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
    <StyledButtonAddFieldColumn
      variant="outlined"
      color={type === "edit" ? "warning" : "success"}
      startIcon={<AddIcon />}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButtonAddFieldColumn>
  )
}

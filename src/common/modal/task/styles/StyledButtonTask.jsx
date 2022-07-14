import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"

const StyledButtonTask = styled(Button)(({ theme }) => ({
  width: "100%",
  margin: 0,
  fontSize: "12px",
}))

export default function StyledCustomization({ onClick, type, disabled }) {
  return (
    <StyledButtonTask
      variant="contained"
      color={type === "edit" ? "warning" : "success"}
      disabled={disabled}
      onClick={onClick}
    >
      {type === "create" ? "Create Task" : "Confirm Update"}
    </StyledButtonTask>
  )
}

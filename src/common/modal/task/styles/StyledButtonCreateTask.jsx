import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"

const StyledButtonCreateTask = styled(Button)(({ theme }) => ({
  width: "100%",
  margin: 0,
  fontSize: "12px",
}))

export default function StyledCustomization({ children }) {
  return (
    <StyledButtonCreateTask variant="contained">
      {children}
    </StyledButtonCreateTask>
  )
}

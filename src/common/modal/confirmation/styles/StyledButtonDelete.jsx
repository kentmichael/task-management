import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"

const StyledButtonDelete = styled(Button)(({ theme }) => ({}))

export default function StyledCustomization({ onClick, children }) {
  return (
    <StyledButtonDelete variant="contained" color="error" onClick={onClick}>
      {children}
    </StyledButtonDelete>
  )
}

import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"

const StyledButtonCancel = styled(Button)(({ theme }) => ({}))

export default function StyledCustomization({ toggleModalConfirm, children }) {
  return (
    <StyledButtonCancel onClick={() => toggleModalConfirm(false)}>
      {children}
    </StyledButtonCancel>
  )
}

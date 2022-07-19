import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"

const StyledCancelButton = styled(Button)(({ theme }) => ({}))

export default function StyledCustomization({ toggleSignoutModal, children }) {
  return (
    <StyledCancelButton
      variant="outlined"
      onClick={() => toggleSignoutModal(false)}
    >
      {children}
    </StyledCancelButton>
  )
}

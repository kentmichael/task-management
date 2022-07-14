import ButtonBase from "@mui/material/ButtonBase"
import { styled } from "@mui/material/styles"

const StyledButtonToggleLoginReg = styled(ButtonBase)(({ theme }) => ({
  fontSize: "10px",
  color: "#3f51b5",
}))

export default function StyledCustomization({
  toggleLoginRegisterForm,
  children,
}) {
  return (
    <StyledButtonToggleLoginReg onClick={toggleLoginRegisterForm}>
      {children}
    </StyledButtonToggleLoginReg>
  )
}

import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"

const StyledBoxInnerContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflow: "scroll",
  height: "300px",
}))

export default function StyledCustomization({ children }) {
  return <StyledBoxInnerContent>{children}</StyledBoxInnerContent>
}

import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"

const StyledBoxMain = styled(Box)(({ theme }) => ({
  borderRadius: "10px",
  padding: "20px",
  backgroundColor: theme.palette.background.default,
  boxShadow: "0px 6px 1px #393939",
}))

export default function StyledCustomization({ children }) {
  return <StyledBoxMain>{children}</StyledBoxMain>
}

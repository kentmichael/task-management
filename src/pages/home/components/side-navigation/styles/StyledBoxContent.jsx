import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"

const StyledBoxContent = styled(Box)(({ theme }) => ({
  flexGrow: "1",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  gap: "30px",
  padding: "30px",
}))

export default function StyledCustomization({ children }) {
  return <StyledBoxContent>{children}</StyledBoxContent>
}

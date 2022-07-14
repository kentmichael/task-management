import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"

const StyledBoxMain = styled(Box)(({ theme }) => ({
  borderRadius: "10px",
  padding: "20px",
  backgroundColor: "#fff",
  boxShadow: "0px 6px 1px #a5a5a5",
}))

export default function StyledCustomization({ children }) {
  return <StyledBoxMain>{children}</StyledBoxMain>
}

import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"

const StyledStackColumnBackground = styled(Stack)(({ theme }) => ({
  gap: "10px",
  borderRadius: "5px",
  padding: "10px",
  backgroundColor: "#eeeeee",
}))

export default function StyledCustomization({ children }) {
  return <StyledStackColumnBackground>{children}</StyledStackColumnBackground>
}

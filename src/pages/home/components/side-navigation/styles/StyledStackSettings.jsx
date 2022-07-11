import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"

const StyledStackSettings = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "center",
  gap: "5px",
}))

export default function StyledCustomization({ children }) {
  return <StyledStackSettings>{children}</StyledStackSettings>
}

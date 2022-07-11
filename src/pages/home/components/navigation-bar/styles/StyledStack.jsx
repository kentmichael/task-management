import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"

const StyledStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
  [theme.breakpoints.up("sm")]: {
    gap: "14px",
  },
}))

export default function StyledCustomization({ children }) {
  return <StyledStack>{children}</StyledStack>
}

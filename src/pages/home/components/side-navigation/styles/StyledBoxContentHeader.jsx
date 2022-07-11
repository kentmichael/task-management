import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

const StyledBoxContentHeader = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "5px",
  textTransform: "uppercase",
}))

export default function StyledCustomization({ children }) {
  return (
    <StyledBoxContentHeader variant="h2">{children}</StyledBoxContentHeader>
  )
}

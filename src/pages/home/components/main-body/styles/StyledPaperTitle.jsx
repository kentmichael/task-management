import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

const StyledPaperTitle = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 600,
}))

export default function StyledCustomization({ children }) {
  return <StyledPaperTitle variant="h4">{children}</StyledPaperTitle>
}

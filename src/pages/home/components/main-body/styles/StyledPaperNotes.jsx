import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

const StyledPaperNotes = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
}))

export default function StyledCustomization({ children }) {
  return <StyledPaperNotes variant="body1">{children}</StyledPaperNotes>
}

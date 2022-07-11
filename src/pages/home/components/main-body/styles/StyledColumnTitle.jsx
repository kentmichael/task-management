import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

const StyledColumnTitle = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  marginBottom: "10px",
  textTransform: "capitalize",
}))

export default function StyledCustomization({ children }) {
  return <StyledColumnTitle variant="h3">{children}</StyledColumnTitle>
}

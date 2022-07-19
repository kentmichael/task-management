import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

const StyledTypographyLoginMessage = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "type",
})(({ theme, type }) => ({
  fontSize: "12px",
  textTransform: "capitalize",
  color: type === "error" ? "red" : "green",
}))

export default function StyledCustomization({ type, children }) {
  return (
    <StyledTypographyLoginMessage type={type}>
      {children}
    </StyledTypographyLoginMessage>
  )
}

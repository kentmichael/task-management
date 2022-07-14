import Container from "@mui/material/Container"
import { styled } from "@mui/material/styles"

const StyledMainContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "20px",

  [theme.breakpoints.up("xs")]: {
    maxWidth: "340px",
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: "400px",
  },
}))

export default function StyledCustomization({ children }) {
  return <StyledMainContainer>{children}</StyledMainContainer>
}

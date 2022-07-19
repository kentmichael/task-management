import Container from "@mui/material/Container"
import { styled } from "@mui/material/styles"

const StyledMainContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== "toggleForm",
})(({ theme, toggleForm }) => ({
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
  [theme.breakpoints.up("md")]: {
    maxWidth: toggleForm ? "600px" : "400px",
  },
}))

export default function StyledCustomization({ toggleForm, children }) {
  return (
    <StyledMainContainer toggleForm={toggleForm}>
      {children}
    </StyledMainContainer>
  )
}

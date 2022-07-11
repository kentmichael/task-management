import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"

const StyledStackMain = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  padding: "30px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: open ? "280px" : 0,
  },
  [theme.breakpoints.up("md")]: {
    paddingInline: "40px",
  },
}))

export default function StyledCustomization({ openSideNav, children }) {
  return <StyledStackMain open={openSideNav}>{children}</StyledStackMain>
}

import Toolbar from "@mui/material/Toolbar"
import { styled } from "@mui/material/styles"

const StyledToolbar = styled(Toolbar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  display: "flex",
  flexFlow: "row-wrap",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBlock: "10px",
  paddingInline: "20px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: open ? "280px" : 0,
    paddingBlock: "15px",
    paddingInline: "30px",
  },
}))

export default function StyledCustomization({ sideNav, children }) {
  const { openSideNav } = sideNav

  return (
    <StyledToolbar component="nav" open={openSideNav}>
      {children}
    </StyledToolbar>
  )
}

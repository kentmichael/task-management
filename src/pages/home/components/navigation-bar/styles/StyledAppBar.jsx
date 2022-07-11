import AppBar from "@mui/material/AppBar"
import { styled } from "@mui/material/styles"

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "sticky",
  backgroundColor: theme.palette.primary.contrastText,
  boxShadow: theme.shadows[1],
}))

export default function StyledCustomization({ children }) {
  return <StyledAppBar>{children}</StyledAppBar>
}

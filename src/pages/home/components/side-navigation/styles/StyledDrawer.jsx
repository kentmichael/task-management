import Drawer from "@mui/material/Drawer"
import { styled } from "@mui/material/styles"

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "280px",
    boxShadow: theme.shadows[1],
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}))

export default function StyledCustomization({ sideNav, children }) {
  const { openSideNav, toggleSideNavigation } = sideNav

  return (
    <StyledDrawer
      variant="persistent"
      anchor="left"
      open={openSideNav}
      onClose={toggleSideNavigation}
    >
      {children}
    </StyledDrawer>
  )
}

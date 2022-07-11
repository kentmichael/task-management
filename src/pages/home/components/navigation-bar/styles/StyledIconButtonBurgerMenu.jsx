import IconButton from "@mui/material/IconButton "
import MenuIcon from "@mui/icons-material/Menu"
import { styled } from "@mui/material/styles"

const StyledIconButtonBurgerMenu = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  color: "#000",
  display: open ? "none" : "block",
}))

const StyledMenuIcon = styled(MenuIcon)(({ theme }) => ({
  fontSize: "24px",
  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
  },
}))

export default function StyledCustomization({ sideNav }) {
  const { openSideNav, toggleSideNavigation } = sideNav

  return (
    <StyledIconButtonBurgerMenu
      aria-label="Side Navigation"
      onClick={toggleSideNavigation}
      open={openSideNav}
    >
      <StyledMenuIcon />
    </StyledIconButtonBurgerMenu>
  )
}

import Toolbar from "@mui/material/Toolbar"
import ButtonBase from "@mui/material/ButtonBase"
import IconButton from "@mui/material/IconButton"
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import { styled } from "@mui/material/styles"

const StyledToolbarHeader = styled(Toolbar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  display: "flex",
  justifyContent: "space-between",
  paddingBlock: "15px",

  [theme.breakpoints.up("sm")]: {
    paddingInline: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingInline: open ? "30px" : "20px",
  },
}))

const StyledLogo = styled(ButtonBase)(({ theme }) => ({
  height: "46px",
  display: "flex",
  flexFlow: "row",
  alignItems: "center",
  gap: "8px",
  fontSize: "26px",
  fontWeight: "600",
}))

export default function StyledCustomization({ sideNav }) {
  const { openSideNav, toggleSideNavigation } = sideNav

  return (
    <StyledToolbarHeader component="nav" open={openSideNav}>
      <StyledLogo component="a">
        <AssignmentOutlinedIcon fontSize="large" color="primary" />
        demo
      </StyledLogo>
      {openSideNav && (
        <IconButton onClick={toggleSideNavigation}>
          <KeyboardArrowLeftIcon fontSize="medium" />
        </IconButton>
      )}
    </StyledToolbarHeader>
  )
}

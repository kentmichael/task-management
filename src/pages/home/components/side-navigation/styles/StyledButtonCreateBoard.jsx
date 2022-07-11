import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize"

const StyledButtonCreateBoard = styled(Button)(({ theme }) => ({
  fontSize: "12px",
}))

export default function StyledCustomization({
  toggleModal,
  toggleSideNavigation,
  children,
}) {
  return (
    <StyledButtonCreateBoard
      startIcon={<DashboardCustomizeIcon />}
      variant="outlined"
      color="primary"
      onClick={() => {
        if (window.innerWidth <= 600) toggleSideNavigation()
        toggleModal(true)
      }}
    >
      {children}
    </StyledButtonCreateBoard>
  )
}

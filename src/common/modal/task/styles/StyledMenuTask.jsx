import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import DeleteIcon from "@mui/icons-material/Delete"
import { styled } from "@mui/material/styles"

const StyledMenuTask = styled(Menu)(({ theme }) => {})

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "5px",
  fontSize: "14px",
}))

export default function StyledCustomization({
  open,
  anchorEl,
  handleClose,
  toggleModalConfirm,
}) {
  return (
    <StyledMenuTask
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{ "aria-labelledby": "more option" }}
    >
      <StyledMenuItem
        onClick={() => {
          toggleModalConfirm(true)
        }}
      >
        <DeleteIcon fontSize="medium" /> Delete Task
      </StyledMenuItem>
    </StyledMenuTask>
  )
}

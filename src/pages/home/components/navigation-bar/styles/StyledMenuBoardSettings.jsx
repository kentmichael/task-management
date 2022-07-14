import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { styled } from "@mui/material/styles"

const StyledMenuBoardSettings = styled(Menu)(({ theme }) => ({}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: "14px",
}))

export default function StyledCustomization({
  anchorEl,
  handleClose,
  toggleModal,
  toggleModalConfirm,
}) {
  const open = Boolean(anchorEl)

  return (
    <>
      <StyledMenuBoardSettings
        open={open}
        anchorEl={anchorEl}
        id="account-menu"
        onClose={handleClose}
        onClick={handleClose}
      >
        <StyledMenuItem onClick={() => toggleModal(true)}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          Edit Board
        </StyledMenuItem>
        <StyledMenuItem onClick={() => toggleModalConfirm(true)}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          Delete Board
        </StyledMenuItem>
      </StyledMenuBoardSettings>
    </>
  )
}

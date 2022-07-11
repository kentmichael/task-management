import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { styled } from "@mui/material/styles"

const StyledMenuBoardSettings = styled(Menu)(({ theme }) => ({}))

export default function StyledCustomization({
  anchorEl,
  handleClose,
  toggleModal,
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
        <MenuItem onClick={() => toggleModal(true)}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          Edit Board
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          Delete Board
        </MenuItem>
      </StyledMenuBoardSettings>
    </>
  )
}

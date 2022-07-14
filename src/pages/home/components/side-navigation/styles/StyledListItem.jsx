import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { styled } from "@mui/material/styles"
import DashboardIcon from "@mui/icons-material/Dashboard"

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  textTransform: "capitalize",
  "& .MuiTypography-body1": { fontSize: "12px" },
}))

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: "5px",
}))

export default function StyledCustomization({
  name,
  id,
  selectedBoard,
  setIdSelectedBoard,
}) {
  return (
    <ListItem disablePadding>
      <StyledListItemButton
        selected={id === selectedBoard}
        onClick={() => setIdSelectedBoard(id)}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <StyledListItemText primary={name} />
      </StyledListItemButton>
    </ListItem>
  )
}

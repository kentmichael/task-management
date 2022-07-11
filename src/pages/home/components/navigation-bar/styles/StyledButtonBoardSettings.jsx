import IconButton from "@mui/material/IconButton"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { styled } from "@mui/material/styles"
import Tooltip from "@mui/material/Tooltip"

const StyledButtonBoardSettings = styled(IconButton)(({ theme }) => ({}))

const StyledMoreVertIcon = styled(MoreVertIcon)(({ theme }) => ({
  width: "30px",
  height: "30px",
  [theme.breakpoints.up("sm")]: {
    width: "40px",
    height: "40px",
  },
}))

export default function StyledCustomization({ handleClick }) {
  return (
    <Tooltip title="Board Settings">
      <StyledButtonBoardSettings onClick={handleClick}>
        <StyledMoreVertIcon />
      </StyledButtonBoardSettings>
    </Tooltip>
  )
}

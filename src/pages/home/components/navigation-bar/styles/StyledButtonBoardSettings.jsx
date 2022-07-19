import IconButton from "@mui/material/IconButton"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { styled } from "@mui/material/styles"
import Tooltip from "@mui/material/Tooltip"

const StyledButtonBoardSettings = styled(IconButton)(({ theme }) => ({}))

const StyledMoreVertIcon = styled(MoreVertIcon)(({ theme }) => ({
  width: "30px",
  height: "30px",
}))

export default function StyledCustomization({ activeUser, handleClick }) {
  return (
    <Tooltip title="Board Settings">
      <span>
        <StyledButtonBoardSettings
          onClick={handleClick}
          disabled={activeUser?.boards?.length ? false : true}
        >
          <StyledMoreVertIcon />
        </StyledButtonBoardSettings>
      </span>
    </Tooltip>
  )
}

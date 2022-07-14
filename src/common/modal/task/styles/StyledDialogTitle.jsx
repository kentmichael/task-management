import DialogTitle from "@mui/material/DialogTitle"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { styled } from "@mui/material/styles"

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "30px",
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "10px",
  fontWeight: 600,
  textTransform: "uppercase",
}))

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: 0,
}))

export default function StyledCustomization({
  handleClick,
  toggleModalTask,
  type,
}) {
  return (
    <StyledDialogTitle>
      <StyledTypography>
        {type === "edit" ? (
          <StyledIconButton onClick={handleClick}>
            <MoreVertIcon fontSize="small" />
          </StyledIconButton>
        ) : null}
        {`${type} task`}
      </StyledTypography>
      <StyledIconButton onClick={() => toggleModalTask(false)}>
        <CloseIcon fontSize="small" />
      </StyledIconButton>
    </StyledDialogTitle>
  )
}

import DialogTitle from "@mui/material/DialogTitle"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import { styled } from "@mui/material/styles"

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "30px",
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textTransform: "uppercase",
}))

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: 0,
}))

export default function StyledCustomization({ toggleModalTask, type }) {
  return (
    <StyledDialogTitle>
      <StyledTypography>{`${type} task`}</StyledTypography>
      <StyledIconButton onClick={() => toggleModalTask(false)}>
        <CloseIcon fontSize="small" />
      </StyledIconButton>
    </StyledDialogTitle>
  )
}

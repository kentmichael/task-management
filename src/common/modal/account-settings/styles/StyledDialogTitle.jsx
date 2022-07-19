import Stack from "@mui/material/Stack"
import DialogTitle from "@mui/material/DialogTitle"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import { styled } from "@mui/material/styles"

const StyledStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "20px",
  paddingBottom: "10px",
  paddingInline: "25px",
}))

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  padding: 0,
  fontSize: "20px",
}))

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: 0,
}))

export default function StyledCustomization({ toggleModalAccountSettings }) {
  return (
    <StyledStack>
      <StyledDialogTitle variant="h4">Account Information</StyledDialogTitle>
      <StyledIconButton onClick={() => toggleModalAccountSettings(false)}>
        <CloseIcon />
      </StyledIconButton>
    </StyledStack>
  )
}

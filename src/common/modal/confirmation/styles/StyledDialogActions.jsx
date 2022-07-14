import DialogActions from "@mui/material/DialogActions"
import { styled } from "@mui/material/styles"

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  paddingInline: "20px",
  paddingBottom: "20px",
}))

export default function StyledCustomization({ children }) {
  return <StyledDialogActions>{children}</StyledDialogActions>
}

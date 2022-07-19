import DialogActions from "@mui/material/DialogActions"
import { styled } from "@mui/material/styles"

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  paddingTop: "10px",
  paddingBottom: "20px",
  paddingInline: "25px",
}))

export default function StyledCustomization({ children }) {
  return <StyledDialogActions>{children}</StyledDialogActions>
}

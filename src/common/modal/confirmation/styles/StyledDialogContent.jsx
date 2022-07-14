import DialogContent from "@mui/material/DialogContent"
import { styled } from "@mui/material/styles"

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  fontSize: "12px",
}))

export default function StyledCustomization({ children }) {
  return <StyledDialogContent component="p">{children}</StyledDialogContent>
}

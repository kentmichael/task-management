import DialogTitle from "@mui/material/DialogTitle"
import { styled } from "@mui/material/styles"

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  paddingBlock: "20px",
  paddingInline: "25px",
  fontSize: "18px",
}))

export default function StyledCustomization({ children }) {
  return <StyledDialogTitle variant="h4">{children}</StyledDialogTitle>
}

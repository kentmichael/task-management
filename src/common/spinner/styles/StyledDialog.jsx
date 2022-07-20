import Dialog from "@mui/material/Dialog"
import { styled } from "@mui/material/styles"

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  "& .MuiPaper-root": {
    overflow: "hidden",
    backgroundColor: "transparent",
    backgroundImage: "none",
  },
}))

export default function StyledCustomization({ open, children }) {
  return <StyledDialog open={open}>{children}</StyledDialog>
}

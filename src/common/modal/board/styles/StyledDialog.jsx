import Dialog from "@mui/material/Dialog"
import { styled } from "@mui/material/styles"

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    width: "300px",
  },
}))

export default function StyledCustomization({ open, children }) {
  return <StyledDialog open={open}>{children}</StyledDialog>
}

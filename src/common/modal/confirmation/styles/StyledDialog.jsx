import Dialog from "@mui/material/Dialog"
import { styled } from "@mui/material/styles"

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    [theme.breakpoints.up("xs")]: {
      width: "350px",
    },
    "& .MuiDialogActions-root": {
      fontSize: "14px",
    },
  },
}))

export default function StyledCustomization({ open, children }) {
  return <StyledDialog open={open}>{children}</StyledDialog>
}

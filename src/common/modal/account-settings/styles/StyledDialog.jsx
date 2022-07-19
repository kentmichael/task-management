import Dialog from "@mui/material/Dialog"
import { styled } from "@mui/material/styles"

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    [theme.breakpoints.up("xs")]: {
      width: "350px",
    },
    [theme.breakpoints.up("md")]: {
      width: "500px",
    },
    "& .MuiDialogActions-root": {
      fontSize: "14px",
    },
  },
}))

export default function StyledCustomization({
  open,
  toggleModalAccountSettings,
  children,
}) {
  return (
    <StyledDialog open={open} onClose={() => toggleModalAccountSettings(false)}>
      {children}
    </StyledDialog>
  )
}

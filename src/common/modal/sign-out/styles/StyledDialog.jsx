import Dialog from "@mui/material/Dialog"
import { styled } from "@mui/material/styles"

const StyledDialog = styled(Dialog)(({ theme }) => ({}))

export default function StyledCustomization({
  open,
  toggleSignoutModal,
  children,
}) {
  return (
    <StyledDialog open={open} onClose={() => toggleSignoutModal(false)}>
      {children}
    </StyledDialog>
  )
}

import DialogActions from "@mui/material/DialogActions"
import { styled } from "@mui/material/styles"

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "10px",
  paddingTop: "10px",
  paddingBottom: "20px",
  paddingInline: "25px",

  "& > *": {
    flexGrow: 1,
  },
}))

export default function StyledCustomization({ children }) {
  return <StyledDialogActions>{children}</StyledDialogActions>
}

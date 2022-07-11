import DialogActions from "@mui/material/DialogActions"
import { styled } from "@mui/material/styles"

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "10px",
  paddingInline: "20px",
  paddingBottom: "30px",
  "& :not(:first-of-type)": {
    margin: 0,
  },
}))

export default function StyledCustomization({ children }) {
  return <StyledDialogActions>{children}</StyledDialogActions>
}

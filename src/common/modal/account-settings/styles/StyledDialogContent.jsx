import DialogContent from "@mui/material/DialogContent"
import { styled } from "@mui/material/styles"

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "20px",
  paddingTop: "10px",
  paddingInline: "25px",

  "& .MuiFormControl-root": {
    "& .MuiInputLabel-root": {
      fontSize: "10px",
      [theme.breakpoints.up("sm")]: {
        fontSize: "12px",
      },
    },
    "& .MuiOutlinedInput-root": {
      fontSize: "10px",
      [theme.breakpoints.up("sm")]: {
        fontSize: "12px",
      },
    },
  },
}))

export default function StyledCustomization({ children }) {
  return <StyledDialogContent>{children}</StyledDialogContent>
}

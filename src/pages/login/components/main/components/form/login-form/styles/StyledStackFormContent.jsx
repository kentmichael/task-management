import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"

const StyledStackFormContent = styled(Stack)(({ theme }) => ({
  gap: "15px",

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
  return <StyledStackFormContent>{children}</StyledStackFormContent>
}

import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"

const StyledGridContainer = styled(Grid)(({ theme }) => ({
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
  return (
    <StyledGridContainer container spacing={1}>
      {children}
    </StyledGridContainer>
  )
}

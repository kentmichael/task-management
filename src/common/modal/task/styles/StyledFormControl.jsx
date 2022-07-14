import FormControl from "@mui/material/FormControl"
import { styled } from "@mui/material/styles"

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "& .MuiInputLabel-formControl": {
    fontSize: "12px",
  },
  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-input": {
      fontSize: "12px",
    },
  },
  "& .MuiFormHelperText-root": {
    marginInline: 0,
    color: "red",
  },
}))

export default function StyledCustomization({ children }) {
  return <StyledFormControl>{children}</StyledFormControl>
}

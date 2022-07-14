import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"

const StyledTextField = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  "& .MuiInputLabel-formControl": {
    fontSize: "12px",
  },
  "& .MuiFormHelperText-root": {
    color: "red",
  },
}))

export default function StyledCustomization({ label, helperText, field }) {
  return (
    <StyledTextField
      label={label}
      variant="standard"
      fullWidth
      helperText={helperText}
      {...field}
    />
  )
}

import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-formControl": {
    fontSize: "12px",
  },
  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-input": {
      fontSize: "12px",
    },
  },
}))

export default function StyledCustomization({
  label,
  field,
  touched,
  helperText,
}) {
  return (
    <StyledTextField
      label={label}
      variant="outlined"
      fullWidth
      helperText={touched?.taskTitle && helperText}
      {...field}
    />
  )
}

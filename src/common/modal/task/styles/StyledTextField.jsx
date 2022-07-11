import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-formControl": {
    fontSize: "14px",
  },
}))

export default function StyledCustomization({ id, label }) {
  return <StyledTextField id={id} label={label} variant="outlined" fullWidth />
}

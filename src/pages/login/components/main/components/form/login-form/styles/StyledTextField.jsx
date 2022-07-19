import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"
import { IconButton, InputAdornment } from "@mui/material"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import Visibility from "@mui/icons-material/Visibility"

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiFormHelperText-root": {
    marginInline: "5px",
    color: "red",
  },
}))

export default function StyledCustomization({
  label,
  variant,
  type,
  field,
  error,
  touched,
  toggleLoginMessage,
  showPassword,
  togglePasswordVisibility,
}) {
  return (
    <StyledTextField
      label={label}
      variant={variant}
      type={type}
      {...field}
      helperText={touched[field.name] && error}
      onClick={() => toggleLoginMessage(false)}
      InputProps={
        label === "Password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  )
}

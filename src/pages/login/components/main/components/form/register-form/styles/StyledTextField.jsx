import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",

  "& .MuiFormHelperText-root": {
    marginInline: "5px",
    color: "red",
  },
}))

export default function StyledCustomization({
  field,
  error,
  touched,
  label,
  variant,
  type,
  showPassword,
  showConfirmPassword,
  toggleVisibility,
}) {
  return (
    <StyledTextField
      {...field}
      label={label}
      variant={variant}
      type={type}
      helperText={error && touched ? error : null}
      InputProps={
        label === "Password" || label === "Verify Password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleVisibility}>
                    {label === "Password" ? (
                      showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )
                    ) : showConfirmPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  )
}

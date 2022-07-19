import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"

const StyledAutocompleteStatus = styled(Autocomplete)(({ theme }) => ({}))

export default function StyledCustomization({
  name,
  label,
  options,
  setFieldValue,
  setTouched,
  values,
  helperText,
}) {
  return (
    <StyledAutocompleteStatus
      isOptionEqualToValue={(option, value) => option === value}
      value={values[name]}
      onChange={(e, newValue) => {
        setFieldValue(name, newValue)
      }}
      onBlur={() => setTouched({ [name]: true })}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          helperText={helperText}
        />
      )}
    />
  )
}

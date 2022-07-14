import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"

const StyledAutocompleteStatus = styled(Autocomplete)(({ theme }) => ({}))

export default function StyledCustomization({
  options,
  setFieldValue,
  setTouched,
  values,
  helperText,
}) {
  return (
    <StyledAutocompleteStatus
      isOptionEqualToValue={(option, value) => option === value}
      value={values.status}
      onChange={(e, newValue) => {
        setFieldValue("status", newValue)
      }}
      onBlur={() => setTouched({ status: true })}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Status"
          variant="outlined"
          helperText={helperText}
        />
      )}
    />
  )
}

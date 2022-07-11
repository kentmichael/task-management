import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"

const StyledAutocompleteStatus = styled(Autocomplete)(({ theme }) => ({}))

const options = ["q", "w", "e", "r", "t"]

export default function StyledCustomization() {
  return (
    <StyledAutocompleteStatus
      options={options}
      id="status"
      clearOnEscape
      renderInput={(params) => (
        <TextField {...params} label="Select Status" variant="outlined" />
      )}
    />
  )
}

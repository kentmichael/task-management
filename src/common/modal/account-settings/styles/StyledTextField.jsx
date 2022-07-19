import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"

const StyledTextField = styled(TextField)(({ theme }) => ({}))

export default function StyledCustomization({ label, value }) {
  return <StyledTextField disabled label={label} value={value} />
}

import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"

const StyledTextField = styled(TextField)(({ theme }) => {})

export default function StyledCustomization({ label, variant, type }) {
  return <StyledTextField label={label} variant={variant} type={type} />
}

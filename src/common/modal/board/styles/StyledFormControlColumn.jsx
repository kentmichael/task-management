import FormControl from "@mui/material/FormControl"
import { styled } from "@mui/material/styles"

const StyledFormControlColumn = styled(FormControl)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
}))

export default function StyledCustomization({ children }) {
  return <StyledFormControlColumn>{children}</StyledFormControlColumn>
}

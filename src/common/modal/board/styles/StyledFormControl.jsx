import FormControl from "@mui/material/FormControl"
import { styled } from "@mui/material/styles"

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "& .MuiInput-root": {
    fontSize: "14px",
  },
}))

export default function StyledCustomization({ children }) {
  return <StyledFormControl>{children}</StyledFormControl>
}

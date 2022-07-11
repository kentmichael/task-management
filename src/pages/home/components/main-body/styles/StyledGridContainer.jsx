import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  margin: 0,
  alignItems: "flex-start",
  rowGap: "20px",
  "& .MuiGrid-item": {
    padding: 0,
    paddingInline: "10px",
  },
}))

export default function StyledCustomization({ children }) {
  return (
    <StyledGridContainer container spacing={1}>
      {children}
    </StyledGridContainer>
  )
}

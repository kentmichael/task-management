import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  margin: 0,
  alignItems: "flex-start",
  rowGap: "20px",
  "& .MuiGrid-item": {
    paddingBlock: "10px",
    paddingInline: "2.5px",
  },
}))

export default function StyledCustomization({ children }) {
  return (
    <StyledGridContainer container spacing={1}>
      {children}
    </StyledGridContainer>
  )
}

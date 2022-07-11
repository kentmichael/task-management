import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"

const StyledGridItem = styled(Grid)(({ theme }) => ({
  width: "100%",
  margin: 0,
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "10px",
}))

export default function StyledCustomization({ children }) {
  return (
    <StyledGridItem item xs={12} md={6} lg={3}>
      {children}
    </StyledGridItem>
  )
}

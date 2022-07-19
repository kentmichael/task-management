import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

const StyledTypographyBoardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 600,
  textTransform: "capitalize",
  color: theme.palette.text.primary,
  [theme.breakpoints.up("sm")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "22px",
  },
}))

export default function StyledCustomization({ children }) {
  return (
    <StyledTypographyBoardTitle variant="h1">
      {children}
    </StyledTypographyBoardTitle>
  )
}

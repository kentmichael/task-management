import Stack from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

const StyledStackHeader = styled(Stack)(({ theme }) => ({
  borderRadius: "10px",
  paddingBlock: "20px",
  paddingInline: "10px",
  backgroundColor: "#3f51b5",
  boxShadow: "0px 6px 1px #232323",
  [theme.breakpoints.up("md")]: {
    paddingBlock: "30px",
    paddingInline: "10px",
  },
}))

const StyledTypographyH1 = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "14px",
  fontWeight: 600,
  letterSpacing: "5px",
  textTransform: "uppercase",
  textAlign: "center",

  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
}))

export default function StyledCustomization({ children }) {
  return (
    <StyledStackHeader component="header">
      <StyledTypographyH1 variant="h1">{children}</StyledTypographyH1>
    </StyledStackHeader>
  )
}

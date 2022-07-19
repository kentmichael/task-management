import Stack from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

const StyledStackFooter = styled(Stack)(({ theme }) => ({
  borderRadius: "10px",
  paddingBlock: "20px",
  paddingInline: "10px",
  backgroundColor: theme.palette.background.default,
  boxShadow: "0px 6px 1px #232323",
  [theme.breakpoints.up("md")]: {
    paddingBlock: "20px",
    paddingInline: "10px",
  },
}))

const StyledTypographyP = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  color: theme.palette.text.default,
  fontSize: "10px",
  textAlign: "center",

  [theme.breakpoints.up("sm")]: {
    fontSize: "12px",
  },
}))

export default function StyledCustomization({ children }) {
  return (
    <StyledStackFooter component="footer">
      <StyledTypographyP component="p">{children}</StyledTypographyP>
    </StyledStackFooter>
  )
}

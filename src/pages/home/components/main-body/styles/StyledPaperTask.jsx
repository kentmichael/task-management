import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"

const StyledPaperTask = styled(Paper)(({ theme }) => ({
  position: "relative",
  paddingBlock: "20px",
  paddingInline: "20px",
  cursor: "pointer",
  "&::after": {
    content: "''",
    position: "absolute",
    inset: 0,
    border: "2px dashed black",
    borderRadius: "inherit",
    backgroundColor: theme.palette.primary.light,
    opacity: 0,
    transition: "opacity 200ms ease-in-out",
  },
  "&:hover": {
    "&::after": {
      opacity: 0.5,
    },
  },
}))

export default function StyledCustomization({ children }) {
  return <StyledPaperTask>{children}</StyledPaperTask>
}

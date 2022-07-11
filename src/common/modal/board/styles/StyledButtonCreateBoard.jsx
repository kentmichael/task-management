import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import { styled } from "@mui/material/styles"

const StyledButtonCreateBoard = styled(Button)(({ theme }) => ({
  width: "100%",
  margin: 0,
  fontSize: "12px",
}))

export default function StyledCustomization({
  withIcon,
  addColumn,
  variant,
  children,
}) {
  return (
    <StyledButtonCreateBoard
      variant={variant}
      startIcon={withIcon && <AddIcon />}
      onClick={addColumn}
    >
      {children}
    </StyledButtonCreateBoard>
  )
}

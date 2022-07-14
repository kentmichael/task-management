import Button from "@mui/material/Button"
import RemoveIcon from "@mui/icons-material/Remove"
import { styled } from "@mui/material/styles"

const StyledButtonRemoveFieldColumn = styled(Button)(({ theme }) => ({
  minWidth: 0,
  margin: 0,
  paddingBlock: 0,
  paddingInline: "5px",
  fontSize: "10px",
  "& .MuiButton-startIcon": {
    margin: 0,
  },
}))

export default function StyledCustomization({ onClick }) {
  return (
    <StyledButtonRemoveFieldColumn
      variant="outlined"
      color="error"
      startIcon={<RemoveIcon />}
      onClick={onClick}
    />
  )
}

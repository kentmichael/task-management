import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"

const StyledButtonAddTask = styled(Button)(({ theme }) => ({
  alignSelf: "center",
  minWidth: 0,
  [theme.breakpoints.down("sm")]: {
    "& .MuiButton-startIcon": {
      marginInline: 0,
    },
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "14px",
  },
}))

const StyledAddIcon = styled(AddIcon)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginInline: 0,
  },
}))

const StyledBoxButtonName = styled(Box)(({ theme }) => ({
  textTransform: "capitalize",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}))

export default function StyledCustomization({ toggleModalTask }) {
  return (
    <StyledButtonAddTask
      variant="contained"
      startIcon={<StyledAddIcon />}
      onClick={() => toggleModalTask(true)}
    >
      <StyledBoxButtonName>Add Task</StyledBoxButtonName>
    </StyledButtonAddTask>
  )
}

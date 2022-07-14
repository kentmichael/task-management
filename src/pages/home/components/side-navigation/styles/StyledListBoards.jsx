import List from "@mui/material/List"
import { styled } from "@mui/material/styles"

const StyledListBoards = styled(List)(({ theme }) => ({
  "& .MuiListItem-root": {
    "& .Mui-selected": {
      backgroundColor: "#e0e0e0",
    },
  },
}))

export default function StyledCustomization({ children }) {
  return <StyledListBoards>{children}</StyledListBoards>
}

import List from "@mui/material/List"
import { styled } from "@mui/material/styles"

const StyledListBoards = styled(List)(({ theme }) => ({}))

export default function StyledCustomization({ children }) {
  return <StyledListBoards>{children}</StyledListBoards>
}

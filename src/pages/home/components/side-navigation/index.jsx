import React from "react"
import { useSelector } from "react-redux"
import StyledDrawer from "./styles/StyledDrawer"
import StyledBoxContent from "./styles/StyledBoxContent"
import StyledToolbarHeader from "./styles/StyledToolbarHeader"
import StyledBoxContentHeader from "./styles/StyledBoxContentHeader"
import StyledButtonCreateBoard from "./styles/StyledButtonCreateBoard"
import StyledBoxInnerContent from "./styles/StyledBoxInnerContent"
import StyledListBoards from "./styles/StyledListBoards"
import StyledListItem from "./styles/StyledListItem"
import StyledStackSwitchTheme from "./styles/StyledStackSwitchTheme"
import StyledStackSettings from "./styles/StyledStackSettings"
import StyledButtonAccount from "./styles/StyledButtonAccount"
import BoardModal from "@/common/modal/board"
import useModal from "@/hooks/useModal"

const SideNavigation = ({ sideNav, board }) => {
  const appData = useSelector((state) => state.appData)
  const {
    data: { boards },
  } = appData
  const [openModal, toggleModal] = useModal()
  const { toggleSideNavigation } = sideNav
  const { selectedBoard, setIdSelectedBoard } = board

  return (
    <StyledDrawer sideNav={sideNav}>
      <StyledToolbarHeader sideNav={sideNav} />

      <StyledBoxContent>
        <StyledButtonCreateBoard
          toggleModal={toggleModal}
          toggleSideNavigation={toggleSideNavigation}
        >
          Create New Board
        </StyledButtonCreateBoard>

        <StyledBoxInnerContent>
          <StyledBoxContentHeader>
            All Boards ({boards?.length || 0})
          </StyledBoxContentHeader>
          <StyledListBoards>
            {boards?.length &&
              boards.map((board) => {
                return (
                  <StyledListItem
                    key={board.boardId}
                    name={board.boardName}
                    id={board.boardId}
                    selectedBoard={selectedBoard}
                    setIdSelectedBoard={setIdSelectedBoard}
                  />
                )
              })}
          </StyledListBoards>
        </StyledBoxInnerContent>

        <StyledStackSettings>
          <StyledStackSwitchTheme />
          <StyledButtonAccount />
        </StyledStackSettings>
      </StyledBoxContent>

      <BoardModal
        open={openModal}
        toggleModal={toggleModal}
        type="create"
        selectedBoard={null}
      />
    </StyledDrawer>
  )
}

export default SideNavigation

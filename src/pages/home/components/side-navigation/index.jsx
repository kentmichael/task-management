import React, { useState, useContext } from "react"
import BoardModal from "@/common/modal/board"
import useModal from "@/hooks/useModal"

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
import { ColorModeContext } from "@/styles/CssResets"
import AccountModal from "@/common/modal/account-settings"

const SideNavigation = ({ sideNav, board, activeUser }) => {
  const { colorMode, mode } = useContext(ColorModeContext)
  const [toggleThemeValue, setToggleThemeValue] = useState(
    mode === "dark" ? true : false
  )
  const [openModalBoard, toggleModalBoard] = useModal()
  const [openModalAccountSettings, toggleModalAccountSettings] = useModal()
  const { toggleSideNavigation } = sideNav
  const { selectedBoard, setIdSelectedBoard } = board

  const toggleTheme = (bool) => {
    setToggleThemeValue(bool)
    colorMode.toggleColorMode()
  }

  return (
    <>
      <StyledDrawer sideNav={sideNav}>
        <StyledToolbarHeader sideNav={sideNav} />

        <StyledBoxContent>
          <StyledButtonCreateBoard
            toggleModalBoard={toggleModalBoard}
            toggleSideNavigation={toggleSideNavigation}
          >
            Create New Board
          </StyledButtonCreateBoard>

          <StyledBoxInnerContent>
            <StyledBoxContentHeader>
              All Boards ({activeUser?.boards?.length || 0})
            </StyledBoxContentHeader>
            <StyledListBoards>
              {!activeUser?.boards?.length
                ? null
                : activeUser.boards.map((board) => {
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
            <StyledStackSwitchTheme
              toggleTheme={toggleTheme}
              toggleThemeValue={toggleThemeValue}
            />
            <StyledButtonAccount
              activeUser={activeUser}
              toggleModalAccountSettings={toggleModalAccountSettings}
            />
          </StyledStackSettings>
        </StyledBoxContent>
      </StyledDrawer>

      <BoardModal
        open={openModalBoard}
        toggleModalBoard={toggleModalBoard}
        type="create"
        selectedBoard={null}
        activeUser={activeUser}
      />

      <AccountModal
        open={openModalAccountSettings}
        toggleModalAccountSettings={toggleModalAccountSettings}
        activeUser={activeUser}
      />
    </>
  )
}

export default SideNavigation

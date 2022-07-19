import React, { useState } from "react"
import useModal from "@/hooks/useModal"
import BoardModal from "@/common/modal/board"
import TaskModal from "@/common/modal/task"
import ConfirmationModal from "@/common/modal/confirmation"

import StyledAppBar from "./styles/StyledAppBar"
import StyledToolBar from "./styles/StyledToolbar"
import StyledTypographyBoardTitle from "./styles/StyledTypographyBoardTitle"
import StyledIconButtonBurgerMenu from "./styles/StyledIconButtonBurgerMenu"
import StyledStack from "./styles/StyledStack"
import StyledButtonAddTask from "./styles/StyledButtonAddTask"
import StyledButtonBoardSettings from "./styles/StyledButtonBoardSettings"
import StyledMenuBoardSettings from "./styles/StyledMenuBoardSettings"

const NavigationBar = ({ sideNav, selectedBoard, activeUser }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [openModal, toggleModal] = useModal()
  const [openModalTask, toggleModalTask] = useModal()
  const [openModalConfirm, toggleModalConfirm] = useModal()

  const handleClick = (e) => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <StyledAppBar>
        <StyledToolBar sideNav={sideNav}>
          <StyledStack>
            <StyledIconButtonBurgerMenu sideNav={sideNav} />
            <StyledTypographyBoardTitle>
              {activeUser
                ? activeUser.boards?.find(
                    (board) => board.boardId === selectedBoard
                  )?.boardName
                : null}
            </StyledTypographyBoardTitle>
          </StyledStack>

          <StyledStack>
            <StyledButtonAddTask
              toggleModalTask={toggleModalTask}
              activeUser={activeUser}
            />
            <StyledButtonBoardSettings
              handleClick={handleClick}
              activeUser={activeUser}
            />
            <StyledMenuBoardSettings
              anchorEl={anchorEl}
              handleClose={handleClose}
              toggleModal={toggleModal}
              toggleModalConfirm={toggleModalConfirm}
            />
          </StyledStack>
        </StyledToolBar>
      </StyledAppBar>

      <TaskModal
        open={openModalTask}
        toggleModalTask={toggleModalTask}
        type="create"
        selectedBoard={selectedBoard}
        activeUser={activeUser}
      />

      <BoardModal
        open={openModal}
        toggleModal={toggleModal}
        type="edit"
        selectedBoard={selectedBoard}
        activeUser={activeUser}
      />

      <ConfirmationModal
        open={openModalConfirm}
        toggleModalConfirm={toggleModalConfirm}
        type="board"
        selectedBoard={selectedBoard}
        activeUser={activeUser}
      />
    </>
  )
}

export default NavigationBar

import React, { useState } from "react"
import StyledAppBar from "./styles/StyledAppBar"
import StyledToolBar from "./styles/StyledToolbar"
import StyledTypographyBoardTitle from "./styles/StyledTypographyBoardTitle"
import StyledIconButtonBurgerMenu from "./styles/StyledIconButtonBurgerMenu"
import StyledStack from "./styles/StyledStack"
import StyledButtonAddTask from "./styles/StyledButtonAddTask"
import StyledButtonBoardSettings from "./styles/StyledButtonBoardSettings"
import StyledMenuBoardSettings from "./styles/StyledMenuBoardSettings"
import { useSelector } from "react-redux"
import useModal from "@/hooks/useModal"
import BoardModal from "@/common/modal/board"
import TaskModal from "@/common/modal/task"

const NavigationBar = ({ sideNav }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const appData = useSelector((state) => state.appData)
  const {
    data: { boards },
  } = appData
  const [openModal, toggleModal] = useModal()
  const [openModalTask, toggleModalTask] = useModal()

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <StyledAppBar>
      <StyledToolBar sideNav={sideNav}>
        <StyledStack>
          <StyledIconButtonBurgerMenu sideNav={sideNav} />
          <StyledTypographyBoardTitle>Board name</StyledTypographyBoardTitle>
        </StyledStack>

        <StyledStack>
          <StyledButtonAddTask toggleModalTask={toggleModalTask} />
          <StyledButtonBoardSettings handleClick={handleClick} />
          <StyledMenuBoardSettings
            anchorEl={anchorEl}
            handleClose={handleClose}
            toggleModal={toggleModal}
          />
        </StyledStack>
      </StyledToolBar>
      <BoardModal open={openModal} toggleModal={toggleModal} type="edit" />
      <TaskModal
        open={openModalTask}
        toggleModalTask={toggleModalTask}
        type="create"
      />
    </StyledAppBar>
  )
}

export default NavigationBar
import React, { useEffect, useState } from "react"
import NavigationBar from "./components/navigation-bar"
import SideNavigation from "./components/side-navigation"
import MainBody from "./components/main-body"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "@/setup/features/app-data/appDataSlice"

const Home = () => {
  const appData = useSelector((state) => state.appData)
  const {
    isLoading,
    data: { boards },
  } = appData
  const [openSideNav, setOpenSideNav] = useState(false)
  const [selectedBoard, setSelectedBoard] = useState(0)
  const dispatch = useDispatch()

  const toggleSideNavigation = () => setOpenSideNav(!openSideNav)
  const setIdSelectedBoard = (boardId) => {
    setSelectedBoard(boardId)
  }

  useEffect(() => {
    // fetch data of user with userId - 10
    dispatch(fetchData(10))
  }, [])

  useEffect(() => {
    setIdSelectedBoard(boards?.[0].boardId)
  }, [isLoading])

  return (
    <>
      <NavigationBar
        sideNav={{ openSideNav, toggleSideNavigation }}
        selectedBoard={selectedBoard}
      />
      <SideNavigation
        sideNav={{
          openSideNav,
          toggleSideNavigation,
        }}
        board={{ selectedBoard, setIdSelectedBoard }}
      />
      <MainBody openSideNav={openSideNav} selectedBoard={selectedBoard} />
    </>
  )
}

export default Home

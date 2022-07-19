import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "@/setup/features/users/usersSlice"
import NavigationBar from "./components/navigation-bar"
import SideNavigation from "./components/side-navigation"
import MainBody from "./components/main-body"

const Home = () => {
  const [openSideNav, setOpenSideNav] = useState(false)
  const [selectedBoard, setSelectedBoard] = useState(0)
  const dispatch = useDispatch()

  // search for active user
  const users = useSelector((state) => state.users)
  const { userList } = users
  const login = useSelector((state) => state.login)
  const { email } = login
  const activeUser = userList.find((user) => user.email === email)

  const toggleSideNavigation = () => setOpenSideNav(!openSideNav)
  const setIdSelectedBoard = (boardId) => setSelectedBoard(boardId)

  // on mount, dispatch a fetch for all users https://reqres.in/api/users
  useEffect(() => {
    const appStore = localStorage.getItem("APP_STORE")
    const appStoreObject = appStore ? JSON.parse(appStore) : null

    if (!appStoreObject?.users.userList.length) dispatch(fetchUsers())
  }, [])

  useEffect(() => {
    setIdSelectedBoard(activeUser?.boards?.[0]?.boardId)
  }, [])

  return (
    <>
      <NavigationBar
        sideNav={{ openSideNav, toggleSideNavigation }}
        selectedBoard={selectedBoard}
        activeUser={activeUser}
      />
      <SideNavigation
        sideNav={{
          openSideNav,
          toggleSideNavigation,
        }}
        board={{ selectedBoard, setIdSelectedBoard }}
        activeUser={activeUser}
      />
      <MainBody
        openSideNav={openSideNav}
        selectedBoard={selectedBoard}
        activeUser={activeUser}
      />
    </>
  )
}

export default Home

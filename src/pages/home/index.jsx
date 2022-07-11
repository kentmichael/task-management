import React, { useEffect, useState } from "react"
import NavigationBar from "./components/navigation-bar"
import SideNavigation from "./components/side-navigation"
import MainBody from "./components/main-body"
import { useDispatch } from "react-redux"
import { fetchData } from "@/setup/features/app-data/appDataSlice"

const Home = () => {
  const [openSideNav, setOpenSideNav] = useState(false)
  const dispatch = useDispatch()

  const toggleSideNavigation = () => setOpenSideNav(!openSideNav)

  useEffect(() => {
    dispatch(fetchData(1))
  }, [])

  return (
    <>
      <NavigationBar sideNav={{ openSideNav, toggleSideNavigation }} />
      <SideNavigation sideNav={{ openSideNav, toggleSideNavigation }} />
      <MainBody openSideNav={openSideNav} />
    </>
  )
}

export default Home

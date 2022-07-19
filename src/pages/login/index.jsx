import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
import StyledStackBackground from "./styles/StyledStackBackground"
import StyledMainContainer from "./styles/StyledMainContainer"

const LoginPage = () => {
  const [toggleForm, setToggleForm] = useState(false)
  const toggleLoginRegisterForm = () => setToggleForm(!toggleForm)

  const session = localStorage.getItem("APP_SESSION")
  const sessionObject = session ? JSON.parse(session) : null

  if (sessionObject?.token) {
    return <Navigate to="/task-management/home" />
  }

  return (
    <StyledStackBackground>
      <StyledMainContainer toggleForm={toggleForm}>
        <Header />
        <Main toggleForm={toggleForm} />
        <Footer
          toggleForm={toggleForm}
          toggleLoginRegisterForm={toggleLoginRegisterForm}
        />
      </StyledMainContainer>
    </StyledStackBackground>
  )
}

export default LoginPage

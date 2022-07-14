import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { postLoginDetails } from "@/setup/features/login/loginSlice"
import StyledStackBackground from "./styles/StyledStackBackground"
import StyledMainContainer from "./styles/StyledMainContainer"
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"

const LoginPage = () => {
  const dispatch = useDispatch()
  const [toggleForm, setToggleForm] = useState(false)

  const toggleLoginRegisterForm = () => setToggleForm(!toggleForm)

  useEffect(() => {
    dispatch(
      postLoginDetails({ email: "eve.holt@reqres.in", password: "anypassword" })
    )
  }, [])

  return (
    <StyledStackBackground>
      <StyledMainContainer>
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

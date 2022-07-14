import React from "react"
import StyledBoxMain from "./styles/StyledBoxMain"
import LoginForm from "./components/form/login-form"
import RegisterForm from "./components/form/register-form"

const Main = ({ toggleForm }) => {
  return (
    <StyledBoxMain>
      {toggleForm ? <RegisterForm /> : <LoginForm />}
    </StyledBoxMain>
  )
}

export default Main

import React from "react"
import LoginForm from "./components/form/login-form"
import RegisterForm from "./components/form/register-form"

import StyledBoxMain from "./styles/StyledBoxMain"

const Main = ({ toggleForm }) => {
  return (
    <StyledBoxMain>
      {toggleForm ? <RegisterForm /> : <LoginForm />}
    </StyledBoxMain>
  )
}

export default Main

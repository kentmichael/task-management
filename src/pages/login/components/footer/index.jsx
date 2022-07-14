import React from "react"
import StyledStackFooter from "./styles/StyledStackFooter"
import StyledButtonToggleLoginReg from "./styles/StyledButtonToggleLoginReg"

const Footer = ({ toggleForm, toggleLoginRegisterForm }) => {
  return (
    <StyledStackFooter>
      {toggleForm ? "Already have account?" : " New user?"}

      <StyledButtonToggleLoginReg
        toggleLoginRegisterForm={toggleLoginRegisterForm}
      >
        {toggleForm ? "Sign in." : " Create new account. "}
      </StyledButtonToggleLoginReg>
    </StyledStackFooter>
  )
}

export default Footer

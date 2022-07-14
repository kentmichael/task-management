import React from "react"
import { Formik, Form, FastField } from "formik"
import StyledStackFormContent from "./styles/StyledStackFormContent"
import StyledTextField from "./styles/StyledTextField"
import Button from "@mui/material/Button"

const LoginForm = () => {
  return (
    <Formik>
      <Form>
        <StyledStackFormContent>
          <StyledTextField
            label="Email address"
            variant="outlined"
            type="email"
          />
          <StyledTextField
            label="Password"
            variant="outlined"
            type="password"
          />

          <Button color="success" variant="contained">
            Sign In
          </Button>
        </StyledStackFormContent>
      </Form>
    </Formik>
  )
}

export default LoginForm

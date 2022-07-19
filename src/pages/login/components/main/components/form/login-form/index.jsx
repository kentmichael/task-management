import React, { useState } from "react"
import { Formik, Form, FastField, Field } from "formik"
import * as Yup from "yup"
import { postLoginDetails } from "@/setup/features/login/loginSlice"
import { useSelector, useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"

import StyledStackFormContent from "./styles/StyledStackFormContent"
import StyledTextField from "./styles/StyledTextField"
import StyledButtonSignIn from "./styles/StyledButtonSignIn"
import StyledTypographyLoginMessage from "./styles/StyledTypographyLoginMessage"

const initialValues = {
  email: "",
  password: "",
}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format.").required("Required"),
  password: Yup.string()
    .min(8, "Password must be atleast 8 characters.")
    .required("Required"),
})

const onSubmit = (
  values,
  onSubmitProps,
  dispatch,
  toggleLoginMessage,
  navigate,
  redirectPath
) => {
  const { email, password } = values
  const { setSubmitting } = onSubmitProps

  dispatch(postLoginDetails({ email, password })).then((response) => {
    toggleLoginMessage(true)
    if (response.type === "login/postLoginDetails/fulfilled") {
      navigate(redirectPath, { replace: true })
    }
  })

  setSubmitting(false)
}

const LoginForm = () => {
  const { token, errorMessage } = useSelector((store) => store.login)
  const [showLoginMessage, setShowLoginMessage] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  const redirectPath = location.state?.path || "/task-management/home"

  const toggleLoginMessage = (value) => setShowLoginMessage(value)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, onSubmitProps) =>
        onSubmit(
          values,
          onSubmitProps,
          dispatch,
          toggleLoginMessage,
          navigate,
          redirectPath
        )
      }
    >
      {(formik) => {
        return (
          <Form>
            <StyledStackFormContent>
              <FastField name="email">
                {(props) => {
                  const {
                    field,
                    meta: { error },
                    form: { touched },
                  } = props

                  return (
                    <StyledTextField
                      label="Email address"
                      variant="outlined"
                      type="email"
                      field={field}
                      error={error}
                      touched={touched}
                      toggleLoginMessage={toggleLoginMessage}
                    />
                  )
                }}
              </FastField>

              <Field name="password">
                {(props) => {
                  const {
                    field,
                    meta: { error },
                    form: { touched },
                  } = props
                  return (
                    <StyledTextField
                      label="Password"
                      variant="outlined"
                      type={showPassword ? "text" : "password"}
                      field={field}
                      error={error}
                      touched={touched}
                      toggleLoginMessage={toggleLoginMessage}
                      showPassword={showPassword}
                      togglePasswordVisibility={togglePasswordVisibility}
                    />
                  )
                }}
              </Field>

              {showLoginMessage && errorMessage ? (
                <StyledTypographyLoginMessage type="error">
                  {errorMessage}
                </StyledTypographyLoginMessage>
              ) : null}
              {showLoginMessage && token ? (
                <StyledTypographyLoginMessage type="success">
                  Login Success!
                </StyledTypographyLoginMessage>
              ) : null}

              <StyledButtonSignIn
                disabled={
                  !formik.isValid || formik.isSubmitting || showLoginMessage
                }
                onClick={formik.submitForm}
              >
                Sign In
              </StyledButtonSignIn>
            </StyledStackFormContent>
          </Form>
        )
      }}
    </Formik>
  )
}

export default LoginForm

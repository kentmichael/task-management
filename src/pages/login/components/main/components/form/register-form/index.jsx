import React, { useState } from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { useDispatch } from "react-redux"
import { postRegistration } from "@/setup/features/registration/registerSlice"

import StyledGridContainer from "./styles/StyledGridContainer"
import StyledGridItem from "./styles/StyledGridItem"
import StyledTextField from "./styles/StyledTextField"
import Button from "@mui/material/Button"

const initialValues = {
  firstName: "",
  lastName: "",
  avatarLink: "",
  email: "",
  password: "",
  verifyPassword: "",
}

const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/[^\s]/, "Invalid field value")
    .required("Required"),
  lastName: Yup.string()
    .matches(/[^\s]/, "Invalid field value")
    .required("Required"),
  avatarLink: Yup.string()
    .matches(/[^\s]/, "Invalid field value")
    .url("Invalid url"),
  email: Yup.string().required("Required").email("Invalid email"),
  password: Yup.string()
    .min(8, "Password must be atleast 8 characters")
    .required("Required"),
  verifyPassword: Yup.string()
    .min(8, "Password must be atleast 8 characters")
    .required("Required")
    .test("isEqual", "Password do not match", function (value) {
      return this.parent.password === value
    }),
})

const onSubmit = (values, onSubmitProps, dispatch) => {
  const { firstName, lastName, avatarLink, email, password } = values
  const { resetForm, setSubmitting } = onSubmitProps

  dispatch(
    postRegistration({
      firstName,
      lastName,
      avatarLink,
      email,
      password,
    })
  )

  resetForm()
  setSubmitting(false)
}

const RegisterForm = () => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const togglePasswordVisibility = () => setShowPassword(!showPassword)
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, onSubmitProps) =>
        onSubmit(values, onSubmitProps, dispatch)
      }
    >
      {(formik) => {
        return (
          <Form>
            <StyledGridContainer>
              <StyledGridItem>
                <Field name="firstName">
                  {(props) => {
                    const {
                      field,
                      meta: { error, touched },
                    } = props

                    return (
                      <StyledTextField
                        field={field}
                        error={error}
                        touched={touched}
                        label="First name"
                        variant="outlined"
                        type="text"
                      />
                    )
                  }}
                </Field>

                <Field name="lastName">
                  {(props) => {
                    const {
                      field,
                      meta: { error, touched },
                    } = props

                    return (
                      <StyledTextField
                        field={field}
                        error={error}
                        touched={touched}
                        label="Last name"
                        variant="outlined"
                        type="text"
                      />
                    )
                  }}
                </Field>

                <Field name="avatarLink">
                  {(props) => {
                    const {
                      field,
                      meta: { error, touched },
                    } = props

                    return (
                      <StyledTextField
                        field={field}
                        error={error}
                        touched={touched}
                        label="Link to avatar"
                        variant="outlined"
                        type="url"
                      />
                    )
                  }}
                </Field>
              </StyledGridItem>
              <StyledGridItem>
                <Field name="email">
                  {(props) => {
                    const {
                      field,
                      meta: { error, touched },
                    } = props

                    return (
                      <StyledTextField
                        field={field}
                        error={error}
                        touched={touched}
                        label="Email address"
                        variant="outlined"
                        type="email"
                      />
                    )
                  }}
                </Field>

                <Field name="password">
                  {(props) => {
                    const {
                      field,
                      meta: { error, touched },
                    } = props

                    return (
                      <StyledTextField
                        field={field}
                        error={error}
                        touched={touched}
                        label="Password"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        showPassword={showPassword}
                        toggleVisibility={togglePasswordVisibility}
                      />
                    )
                  }}
                </Field>

                <Field name="verifyPassword">
                  {(props) => {
                    const {
                      field,
                      meta: { error, touched },
                    } = props

                    return (
                      <StyledTextField
                        field={field}
                        error={error}
                        touched={touched}
                        label="Verify Password"
                        variant="outlined"
                        type={showConfirmPassword ? "text" : "password"}
                        showConfirmPassword={showConfirmPassword}
                        toggleVisibility={toggleConfirmPasswordVisibility}
                      />
                    )
                  }}
                </Field>

                <Button
                  sx={{ color: "#fff" }}
                  color="success"
                  variant="contained"
                  disabled={!formik.isValid || formik.isSubmitting}
                  onClick={formik.submitForm}
                >
                  Create Account
                </Button>
              </StyledGridItem>
            </StyledGridContainer>
          </Form>
        )
      }}
    </Formik>
  )
}

export default RegisterForm

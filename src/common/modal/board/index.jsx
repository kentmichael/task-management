import React from "react"
import { Formik, Form, Field, FastField, FieldArray } from "formik"
import * as Yup from "yup"
import _ from "lodash"
import { addBoard, editBoard } from "@/setup/features/users/usersSlice"
import { useDispatch } from "react-redux"

import StyledDialog from "./styles/StyledDialog"
import StyledDialogTitle from "./styles/StyledDialogTitle"
import StyledFormControl from "./styles/StyledFormControl"
import StyledDialogActions from "./styles/StyledDialogActions"
import StyledTextField from "./styles/StyledTextField"
import StyledButtonSubmitBoard from "./styles/StyledButtonSubmitBoard"
import StyledButtonAddFieldColumn from "./styles/StyledButtonAddFieldColumn"
import StyledButtonRemoveFieldColumn from "./styles/StyledButtonRemoveFieldColumn"
import StyledFormControlColumn from "./styles/StyledFormControlColumn"
import DialogContent from "@mui/material/DialogContent"

const defaultValues = {
  boardName: "",
  columns: [],
}

const onSubmit = (
  values,
  onSubmitProps,
  toggleModalBoard,
  dispatch,
  type,
  selectedBoard,
  activeUser
) => {
  const { resetForm, setSubmitting } = onSubmitProps

  if (type === "edit")
    dispatch(editBoard({ selectedBoard, values, activeUser }))
  else dispatch(addBoard({ values, activeUser }))

  toggleModalBoard(false)
  setSubmitting(false)
  resetForm()
}

const validationSchema = Yup.object({
  boardName: Yup.string()
    .required("Required")
    .matches(/[^\s]/, "Invalid field name"),
  columns: Yup.array().of(
    Yup.object().shape({
      columnName: Yup.string()
        .required("Required")
        .matches(/[^\s]/, "Invalid field name"),
    })
  ),
})

const BoardModal = (props) => {
  const { open, toggleModalBoard, type, selectedBoard, activeUser } = props
  const dispatch = useDispatch()

  const boardData = activeUser?.boards?.find(
    (board) => board.boardId === selectedBoard
  )
  const savedData = {
    boardName: boardData?.boardName,
    columns: _.cloneDeep(boardData?.columns),
  }

  const initialValues = selectedBoard ? savedData : defaultValues

  return (
    <StyledDialog open={open}>
      <StyledDialogTitle
        toggleModalBoard={toggleModalBoard}
        type={type}
      ></StyledDialogTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, onSubmitProps) => {
          onSubmit(
            values,
            onSubmitProps,
            toggleModalBoard,
            dispatch,
            type,
            selectedBoard,
            activeUser
          )
        }}
      >
        {(formik) => {
          return (
            <Form>
              <DialogContent>
                <StyledFormControl>
                  <FastField name="boardName">
                    {(props) => {
                      const {
                        field,
                        form: { errors },
                      } = props

                      return (
                        <StyledTextField
                          id="board-name"
                          label="Board Name"
                          helperText={errors.boardName}
                          field={field}
                        />
                      )
                    }}
                  </FastField>

                  <FieldArray name="columns">
                    {(fieldArrayProps) => {
                      const {
                        push,
                        remove,
                        form: {
                          values: { columns },
                        },
                      } = fieldArrayProps

                      return (
                        <>
                          {columns.map((column, idx) => {
                            return (
                              <StyledFormControlColumn key={idx}>
                                <Field name={`columns[${idx}].columnName`}>
                                  {(props) => {
                                    const {
                                      field,
                                      form: { errors },
                                    } = props

                                    return (
                                      <>
                                        <StyledTextField
                                          label="Column Name"
                                          field={field}
                                          helperText={
                                            errors.columns?.[idx]?.columnName
                                          }
                                        />

                                        <StyledButtonRemoveFieldColumn
                                          onClick={() => remove(idx)}
                                        />
                                      </>
                                    )
                                  }}
                                </Field>
                              </StyledFormControlColumn>
                            )
                          })}
                          <StyledButtonAddFieldColumn
                            type={type}
                            disabled={!formik.isValid || formik.isSubmitting}
                            onClick={() => push("")}
                          >
                            Add Column
                          </StyledButtonAddFieldColumn>
                        </>
                      )
                    }}
                  </FieldArray>
                </StyledFormControl>
              </DialogContent>

              <StyledDialogActions>
                <StyledButtonSubmitBoard
                  onClick={formik.submitForm}
                  disabled={!formik.isValid || formik.isSubmitting}
                  type={type}
                >
                  {type === "edit" ? "Update Board" : "Create New Board"}
                </StyledButtonSubmitBoard>
              </StyledDialogActions>
            </Form>
          )
        }}
      </Formik>
    </StyledDialog>
  )
}

export default BoardModal

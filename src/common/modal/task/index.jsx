import React, { useState } from "react"
import { Formik, Form, FastField } from "formik"
import * as Yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import useModal from "@/hooks/useModal"
import ConfirmationModal from "../confirmation"
import { addTask, editTask } from "@/setup/features/users/usersSlice"

import StyledDialog from "./styles/StyledDialog"
import StyledDialogTitle from "./styles/StyledDialogTitle"
import StyledDialogActions from "./styles/StyledDialogActions"
import StyledButtonTask from "./styles/StyledButtonTask"
import StyledFormControl from "./styles/StyledFormControl"
import StyledTextField from "./styles/StyledTextField"
import StyledAutocompleteStatus from "./styles/StyledAutocompleteStatus"
import StyledMenuTask from "./styles/StyledMenuTask"
import DialogContent from "@mui/material/DialogContent"

const validationSchema = Yup.object({
  taskTitle: Yup.string()
    .required("Required")
    .matches(/[^\s]/, "Invalid field value"),
  status: Yup.string().nullable().required("Required"),
  assignee: Yup.string().nullable().required("Required"),
})

const onSubmit = (
  values,
  onSubmitProps,
  dispatch,
  toggleModalTask,
  type,
  ids
) => {
  const { resetForm, setSubmitting } = onSubmitProps
  const { activeUser, selectedBoard, columnId, taskId } = ids

  if (type === "edit")
    dispatch(editTask({ values, selectedBoard, columnId, taskId, activeUser }))
  else dispatch(addTask({ values, selectedBoard, activeUser }))

  resetForm()
  setSubmitting(false)
  toggleModalTask(false)
}

const TaskModal = (props) => {
  const {
    open,
    toggleModalTask,
    selectedBoard,
    type,
    taskId,
    columnId,
    activeUser,
  } = props
  const [anchorEl, setAnchorEl] = useState(null)
  const openAnchor = Boolean(anchorEl)
  const [openModalConfirm, toggleModalConfirm] = useModal()
  const dispatch = useDispatch()

  const { userList } = useSelector((state) => state.users)

  const board = activeUser?.boards?.find(
    (board) => board.boardId === selectedBoard
  )
  const columns = board?.columns.map((column) => column.columnName)
  const options = columns ?? ["No options"]

  const users = userList?.map((user) => user.email)
  const assigneeOptions = users ?? ["No options"]

  const selectedColumn = board?.columns.find(
    (column) => column.columnId === columnId
  )
  const selectedTask = selectedColumn?.tasks.find(
    (task) => task.taskId === taskId
  )

  const defaultValue = {
    taskTitle: type === "edit" ? selectedTask?.taskTitle : "",
    status: type === "edit" ? selectedTask?.status : options[0],
    assignee: activeUser?.email,
  }

  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <StyledDialog open={open}>
        <StyledDialogTitle
          handleClick={handleClick}
          toggleModalTask={toggleModalTask}
          type={type}
        />

        <Formik
          initialValues={defaultValue}
          onSubmit={(values, onSubmitProps) => {
            const ids = {
              activeUser,
              selectedBoard,
              taskId,
              columnId,
            }

            onSubmit(
              values,
              onSubmitProps,
              dispatch,
              toggleModalTask,
              type,
              ids
            )
          }}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form>
                <DialogContent>
                  <StyledFormControl>
                    <FastField name="taskTitle">
                      {(props) => {
                        const { field, form } = props
                        const { errors, touched } = form

                        return (
                          <StyledTextField
                            label="Task Title"
                            field={field}
                            touched={touched}
                            helperText={errors.taskTitle}
                          />
                        )
                      }}
                    </FastField>

                    <FastField name="status">
                      {(props) => {
                        const {
                          form: {
                            setFieldValue,
                            setTouched,
                            values,
                            errors,
                            touched,
                          },
                          field: { name },
                        } = props

                        return (
                          <StyledAutocompleteStatus
                            name={name}
                            label="Select Status"
                            options={options}
                            setFieldValue={setFieldValue}
                            setTouched={setTouched}
                            values={values}
                            helperText={touched.status && errors.status}
                          />
                        )
                      }}
                    </FastField>

                    <FastField name="assignee">
                      {(props) => {
                        const {
                          form: {
                            setFieldValue,
                            setTouched,
                            values,
                            errors,
                            touched,
                          },
                          field: { name },
                        } = props

                        return (
                          <StyledAutocompleteStatus
                            name={name}
                            label="Assign to"
                            options={assigneeOptions}
                            setFieldValue={setFieldValue}
                            setTouched={setTouched}
                            values={values}
                            helperText={touched.status && errors.assignee}
                          />
                        )
                      }}
                    </FastField>
                  </StyledFormControl>
                </DialogContent>
                <StyledDialogActions>
                  <StyledButtonTask
                    type={type}
                    onClick={formik.submitForm}
                    disabled={!formik.isValid || formik.isSubmitting}
                  />
                </StyledDialogActions>
              </Form>
            )
          }}
        </Formik>
      </StyledDialog>
      <StyledMenuTask
        open={openAnchor}
        anchorEl={anchorEl}
        handleClose={handleClose}
        toggleModalConfirm={toggleModalConfirm}
      />

      <ConfirmationModal
        open={openModalConfirm}
        toggleModalConfirm={toggleModalConfirm}
        toggleModalTask={toggleModalTask}
        handleClose={handleClose}
        type="task"
        selectedBoard={selectedBoard}
        taskId={taskId}
        columnId={columnId}
        activeUser={activeUser}
      />
    </>
  )
}

export default TaskModal

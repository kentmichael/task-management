import React, { useState } from "react"
import { Formik, Form, FastField } from "formik"
import * as Yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import { addTask, editTask } from "@/setup/features/app-data/appDataSlice"
import StyledDialog from "./styles/StyledDialog"
import StyledDialogTitle from "./styles/StyledDialogTitle"
import StyledDialogActions from "./styles/StyledDialogActions"
import StyledButtonTask from "./styles/StyledButtonTask"
import StyledFormControl from "./styles/StyledFormControl"
import StyledTextField from "./styles/StyledTextField"
import StyledAutocompleteStatus from "./styles/StyledAutocompleteStatus"
import StyledMenuTask from "./styles/StyledMenuTask"
import DialogContent from "@mui/material/DialogContent"
import useModal from "@/hooks/useModal"
import ConfirmationModal from "../confirmation"

const validationSchema = Yup.object({
  taskTitle: Yup.string()
    .required("Required")
    .matches(/[^\s]/, "Invalid field name"),
  status: Yup.string().nullable().required("Required"),
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
  const { selectedBoard, columnId, taskId } = ids

  if (type === "edit")
    dispatch(editTask({ values, selectedBoard, columnId, taskId }))
  else dispatch(addTask({ values, selectedBoard }))

  resetForm()
  setSubmitting(false)
  toggleModalTask(false)
}

const TaskModal = (props) => {
  const { open, toggleModalTask, selectedBoard, type, taskId, columnId } = props
  const [anchorEl, setAnchorEl] = useState(null)
  const openAnchor = Boolean(anchorEl)
  const [openModalConfirm, toggleModalConfirm] = useModal()
  const dispatch = useDispatch()
  const appData = useSelector((state) => state.appData)
  const {
    data: { boards },
  } = appData

  const board = boards?.find((board) => board.boardId === selectedBoard)
  const columns = board?.columns.map((column) => column.columnName)
  const options = columns ?? ["Option 1"]

  const selectedColumn = board?.columns.find(
    (column) => column.columnId === columnId
  )
  const selectedTask = selectedColumn?.tasks.find(
    (task) => task.taskId === taskId
  )

  const defaultValue = {
    taskTitle: type === "edit" ? selectedTask?.taskTitle : "",
    status: type === "edit" ? selectedTask?.status : options[0],
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
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
            selectedBoard,
            taskId,
            columnId,
          }

          onSubmit(values, onSubmitProps, dispatch, toggleModalTask, type, ids)
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
                      const { errors } = form

                      return (
                        <StyledTextField
                          label="Task Title"
                          field={field}
                          helperText={errors.taskTitle}
                        />
                      )
                    }}
                  </FastField>

                  <FastField name="status">
                    {(props) => {
                      const {
                        form: { setFieldValue, setTouched, values, errors },
                      } = props

                      return (
                        <StyledAutocompleteStatus
                          options={options}
                          setFieldValue={setFieldValue}
                          setTouched={setTouched}
                          values={values}
                          helperText={errors.status}
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
      />
    </StyledDialog>
  )
}

export default TaskModal

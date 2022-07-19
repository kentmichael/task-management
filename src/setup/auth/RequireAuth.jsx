import React from "react"
import { Navigate, useLocation } from "react-router-dom"

const RequireAuth = ({ children }) => {
  const location = useLocation()
  const session = localStorage.getItem("APP_SESSION")
  const sessionObject = session ? JSON.parse(session) : null

  if (!sessionObject?.token) {
    return (
      <Navigate to="/task-management/" state={{ path: location.pathname }} />
    )
  }

  return children
}

export default RequireAuth

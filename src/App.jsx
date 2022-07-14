import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import LoginPage from "./pages/login"
import NoMatchPage from "./pages/nomatch"
import CssResets from "./styles/CssResets"

const App = () => {
  return (
    <CssResets>
      <Routes>
        <Route path="/task-management/login" element={<LoginPage />} />
        <Route path="/task-management/home" element={<Home />} />
        <Route path="/task-management*" element={<NoMatchPage />} />
      </Routes>
    </CssResets>
  )
}

export default App

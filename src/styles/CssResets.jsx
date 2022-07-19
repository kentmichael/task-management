import React, { useState, useMemo, useEffect } from "react"

import { createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
})

const savedTheme = localStorage.getItem("APP_THEME")

const CssResets = ({ children }) => {
  const [mode, setMode] = useState(savedTheme || "light")

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                padding: 0,
              },
            },
          },
        },
        palette: {
          mode,
        },
      }),
    [mode]
  )

  useEffect(() => {
    localStorage.setItem("APP_THEME", mode)
  }, [mode])

  return (
    <ColorModeContext.Provider value={{ colorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline>{children}</CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default CssResets

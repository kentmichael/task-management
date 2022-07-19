import Stack from "@mui/material/Stack"
import Switch from "@mui/material/Switch"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

const StyledStackSwitchTheme = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
}))

export default function StyledCustomization({ toggleTheme, toggleThemeValue }) {
  return (
    <StyledStackSwitchTheme>
      <StyledTypography>Light</StyledTypography>
      <Switch
        checked={toggleThemeValue}
        onClick={() => {
          toggleTheme(!toggleThemeValue)
        }}
      />
      <StyledTypography>Dark</StyledTypography>
    </StyledStackSwitchTheme>
  )
}

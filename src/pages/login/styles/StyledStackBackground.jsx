import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"
import BgMobile from "@/assets/images/bg-intro-mobile.png"
import BgDesktop from "@/assets/images/bg-intro-desktop.png"

const StyledStackBackground = styled(Stack)(({ theme }) => ({
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#000",
  backgroundImage: `url(${BgMobile})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  [theme.breakpoints.up("sm")]: {
    backgroundImage: `url(${BgDesktop})`,
  },

  "& .MuiContainer-root": {
    padding: 0,
  },
}))

export default function StyledCustomization({ children }) {
  return <StyledStackBackground>{children}</StyledStackBackground>
}

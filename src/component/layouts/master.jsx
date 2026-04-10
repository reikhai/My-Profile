import { useState, useContext, useMemo, createContext,useEffect } from "react";
import ScrollTopButton from "./footer";
import Main from "../../routers/main";
import SideBar from "./sideBar";
import SocialSideBar from "./socialSideBar";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import resume from "../../document/resume.pdf";
import { motion } from "framer-motion";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const onResumeClick = () => {
    window.open(resume);
  };
  
  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.2,
        }}
        animate={{
          position: "fixed",
          zIndex: 10000,
          right: "0px",
          margin: "15px",
        }}
      >
        <Button onClick={onResumeClick} variant="contained">
          Resume
        </Button>
      </motion.div>

      <Main />
      <SocialSideBar />
      <SideBar theme={theme} modeChange={colorMode.toggleColorMode} />
      <ScrollTopButton modeChange={colorMode.toggleColorMode} theme={theme} />
    </>
  );
}

export default function MasterLayout() {
  const [mode, setMode] = useState("light");
  const hours = new Date().getHours()
  const isDayTime = hours > 6 && hours < 20

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#2563eb" : "#60a5fa",
            light: mode === "light" ? "#3b82f6" : "#93c5fd",
            dark: mode === "light" ? "#1d4ed8" : "#3b82f6",
            contrastText: "#ffffff",
          },
          secondary: {
            main: mode === "light" ? "#64748b" : "#94a3b8",
            light: mode === "light" ? "#94a3b8" : "#cbd5e1",
            dark: mode === "light" ? "#475569" : "#64748b",
          },
          background: {
            default: mode === "light" ? "#f4f6f9" : "#12151a",
            paper: mode === "light" ? "#ffffff" : "#1a1f27",
          },
          divider:
            mode === "light"
              ? "rgba(15, 23, 42, 0.08)"
              : "rgba(148, 163, 184, 0.14)",
          text: {
            primary: mode === "light" ? "#0f172a" : "#e8eef4",
            secondary: mode === "light" ? "#475569" : "#94a3b8",
          },
        },
        shape: { borderRadius: 10 },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                borderRadius: 8,
                boxShadow: "none",
                "&:hover": { boxShadow: "none" },
              },
            },
          },
        },
      }),
    [mode]
  );

  useEffect(() => {
    if(isDayTime === true){
      setMode('light')
    } else {
      setMode('dark')
    }
  },[]);


  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <div id="home" style={{ overflowX: "hidden" }}>
            <MyApp />
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

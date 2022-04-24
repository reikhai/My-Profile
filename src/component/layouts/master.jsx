import { useState, useContext, useMemo, createContext } from "react";
import ScrollTopButton from "./footer";
import Main from "../../routers/main";
import SideBar from "./sideBar";
import SocialSideBar from "./socialSideBar";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { deepPurple, grey } from "@mui/material/colors";
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
        <Button onClick={onResumeClick} variant="outlined">
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
            ...deepPurple,
            ...(mode === "dark" && {
              main: deepPurple[300],
            }),
          },
          ...(mode === "dark" && {
            background: {
              default: "#434343",
              paper: "#434343",
            },
          }),
          text: {
            ...(mode === "light"
              ? {
                  primary: grey[900],
                  secondary: grey[800],
                }
              : {
                  primary: "#fff",
                  secondary: grey[500],
                }),
          },
        },
      }),
    [mode]
  );

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

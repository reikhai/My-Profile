import { useState, useContext, useMemo, createContext } from "react";
import ScrollTopButton from "./component/layouts/footer";
import Main from "./routers/main";
import SideBar from "./component/layouts/sideBar";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { amber, grey, lightBlue } from "@mui/material/colors";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      <Main />
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
            ...amber,
            ...(mode === "dark" && {
              main: lightBlue[300],
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

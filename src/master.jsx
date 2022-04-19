import { useState, useContext, useMemo, createContext } from "react";
import ScrollTopButton from "./component/layouts/footer";
import Main from "./routers/main";
import SideBar from "./component/layouts/sideBar";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import FirstContent from "./component/firstContent";
import SecondContent from "./component/secondContent";
import ThirdContent from "./component/thirdContent";
import { amber, deepOrange, grey, lightBlue } from "@mui/material/colors";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === "dark" && {
        main: amber[300],
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
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
});

// const darkModeTheme = createTheme(getDesignTokens("dark"));

function MyApp() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      {/* <Main theme={theme} /> */}
      <FirstContent theme={theme} />
      <SecondContent theme={theme} />
      <ThirdContent theme={theme} />
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
      <div id="home">
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <MyApp />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </div>
    </>
  );
}

import { useEffect } from "react";
import { lightBlue } from "@mui/material/colors";
import { makeStyles } from "tss-react/mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FirstContent from "./firstContent";
import SecondContent from "./secondContent";
import ThirdContent from "./thirdContent";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      flexGrow: 1,
    },

    scrollToElement: {
      position: "relative",
      width: "100%",
      background: "#fff",
      paddingTop: "50px",
      overflow: "hidden",
      zIndex: "2",
    },

    letterSpacing: {
      letterSpacing: ".25em",
      color: "#fb8351",
    },
  };
});

const customTheme = createTheme({
  palette: {
    primary: {
      main: lightBlue[200],
    },
  },
});

export default function Home({ theme }) {
  const classes = useStyles();
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <div className={classes.root}>
          <FirstContent theme={theme} />
          <SecondContent />
          <ThirdContent />
        </div>
      </ThemeProvider>
    </>
  );
}

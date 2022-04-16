import React from "react";
import { lightBlue } from "@mui/material/colors";
import { makeStyles } from "tss-react/mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FirstContent from "./firstContent";
import SecondContent from "./secondContent";
import ThirdContent from "./thirdContent";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {
  Zoom,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Fab,
  Tooltip,
} from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/Person";

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

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[200],
    },
  },
});

export default function Home() {
  const [view, setView] = React.useState("list");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const attr = event.currentTarget.getAttribute("data-scroll-to");
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${attr}`
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ToggleButtonGroup
          orientation="vertical"
          value={view}
          exclusive
          onChange={handleChange}
          color="primary"
          sx={{
            background: "white",
            position: "fixed",
            top: "280px",
            right: 0,
            zIndex: 9999,
          }}
        >
          <ToggleButton
            value="profile"
            aria-label="profile"
            onClick={handleClick}
            data-scroll-to="profile"
          >
            <Tooltip title="Profile" placement="left-start">
              <PersonIcon />
            </Tooltip>
          </ToggleButton>

          <ToggleButton
            onClick={handleClick}
            value="experience"
            aria-label="experience"
            data-scroll-to="experience"
          >
            <Tooltip title="Experience" placement="left-start">
              <WorkspacePremiumIcon />
            </Tooltip>
          </ToggleButton>

          <ToggleButton
            onClick={handleClick}
            value="project"
            aria-label="project"
            data-scroll-to="project"
          >
            <Tooltip title="Project" placement="left-start">
              <ListAltIcon />
            </Tooltip>
          </ToggleButton>
        </ToggleButtonGroup>

        <div className={classes.root}>
          <FirstContent />
          <SecondContent />
          <ThirdContent />

          <Zoom in={trigger}>
            <Box
              onClick={handleClick}
              data-scroll-to="home"
              role="presentation"
              sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 9999 }}
            >
              <Fab color="primary" size="small" aria-label="scroll back to top">
                <KeyboardDoubleArrowUpIcon />
              </Fab>
            </Box>
          </Zoom>
        </div>
      </ThemeProvider>
    </>
  );
}

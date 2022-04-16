import React from "react";
import { lightBlue } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Zoom, Box, Fab } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[200],
    },
  },
});

export default function Home() {
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
      </ThemeProvider>
    </>
  );
}

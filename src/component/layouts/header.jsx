import React from "react";
import { makeStyles } from "tss-react/mui";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import clsx from "clsx";
import {
  SwipeableDrawer,
  Divider,
  Container,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import html from "../../images/icons8-html-5.svg";
import css from "../../images/icons8-css3.svg";
import js from "../../images/icons8-javascript.svg";
import vuejs from "../../images/icons8-vue-js.svg";
import reactjs from "../../images/icons8-react.svg";
import laravel from "../../images/laravel-2.svg";
import bootstrap from "../../images/bootstrap-4.svg";
import materialUI from "../../images/material-ui-1.svg";
import khai from "../../images/khai.jpg";
// import ReorderIcon from "@material-ui/icons/Reorder";
// import ScrollIntoView from "react-scroll-into-view";

const drawerWidth = 290;

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "serif",
      textTransform: "none",
      fontSize: 16,
    },
  },
});

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      height: "100vh",
      flexGrow: 1,
      top: "0",
      left: "0",
      width: "100%",
      padding: "0",
      margin: "0",
      zIndex: "99",
      position: "absolute",
      background: "linear-gradient(147deg, #000000 0%, #434343 74%)",
    },

    rightGroup: {
      justifyContent: "flex-end",
      display: "flex",
    },

    reduceGap: {
      justifyContent: "flex-end",
      display: "grid",
    },

    navDisplayFlex: {
      justifyContent: `space-between`,
      "&.MuiList-root": {
        // padding: "30px",
        margin: "auto",
      },
      [theme.breakpoints.up("xs")]: {
        display: "none",
      },
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
      [theme.breakpoints.up("md")]: {
        display: `inline-flex`,
      },
    },

    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`,
    },

    logo: {
      position: "absolute",
      width: "175px",
      zIndex: "10000",
      top: "-25px",

      [theme.breakpoints.up("xs")]: {
        top: "-13px",
      },
      [theme.breakpoints.up("sm")]: {
        top: "-13px",
      },
      [theme.breakpoints.up("md")]: {
        top: "-25px",
      },
    },

    firstContent: {
      alignItems: "center",
      display: "flex",
      float: "left",
      height: "70vh",
      justifyContent: "space-between",
      width: "100%",
      position: "relative",
      zIndex: "1000",
    },

    fontStyle: {
      float: "left",
      width: "60%",
      "& h2": {
        color: "#ffffff66",
        float: `left`,
        fontSize: "48px",
        fontWeight: 800,
        margin: 0,
        padding: 0,
        width: "100%",
      },
      "& h4": {
        color: "#ffffff66",
        float: "left",
        margin: "0 0 15px",
        padding: 0,
        width: "100%",
      },
      "& p": {
        color: "#ffffff66",
        margin: 0,
        padding: 0,
      },
    },

    skillContent: {
      "& .skills": {
        display: "inline-flex",
        alignItems: "center",
        color: "#ffffff66",
        padding: "10px 0px 0px 0px",
      },
      "& label": {
        paddingRight: "10px",
      },

      [theme.breakpoints.up("xs")]: {
        "& img": {
          float: "left",
          margin: "10px 10px 10px 0px",
          maxWidth: "80px",
        },
      },
      [theme.breakpoints.up("sm")]: {
        "& img": {
          float: "left",
          margin: "10px 10px 10px 0px",
          maxWidth: "80px",
        },
      },
      [theme.breakpoints.up("md")]: {
        "& img": {
          float: "left",
          margin: "10px 20px 10px 0px",
          maxWidth: "80px",
        },
      },
    },

    myProfile: {
      textAlign: "center",
      [theme.breakpoints.up("xs")]: {
        width: "35%",
        "& img": {
          objectFit: "cover",
          borderRadius: "16px 16px 16px 16px",
          boxShadow: "none",
          borderWidth: "3px",
          borderStyle: "solid",
          borderColor: "black",
          transform: "translateX(-1%) translateY(-1%) rotateZ(0deg)",
          transition: "300ms",
          height: "165px",
          boxShadow: "8px 8px 0px 0px #000000",
        },
      },

      [theme.breakpoints.up("sm")]: {
        width: "40%",
        "& img": {
          objectFit: "cover",
          borderRadius: "16px 16px 16px 16px",
          boxShadow: "8px 8px 0px 0px black",
          borderWidth: "3px",
          borderStyle: "solid",
          borderColor: "black",
          transform: "rotateZ(3deg)",
          transition: "300ms",
          height: "295px",
          boxShadow: "8px 8px 0px 0px #000000",
        },

        "& img:hover": {
          boxShadow: "none",
          transform: "translateX(-1%) translateY(-1%) rotateZ(0deg)",
        },
      },
      [theme.breakpoints.up("md")]: {
        width: "40%",
        "& img": {
          objectFit: "cover",
          borderRadius: "16px 16px 16px 16px",
          boxShadow: "8px 8px 0px 0px black",
          borderWidth: "3px",
          borderStyle: "solid",
          borderColor: "black",
          transform: "rotateZ(3deg)",
          transition: "300ms",
          height: "295px",
          boxShadow: "8px 8px 0px 0px #000000",
        },

        "& img:hover": {
          boxShadow: "none",
          transform: "translateX(-1%) translateY(-1%) rotateZ(0deg)",
        },
      },
    },

    secondContent: {
      alignItems: "center",
      display: "flex",
      float: "left",
      height: "70vh",
      justifyContent: "space-between",
      width: "100%",
      position: "relative",
      zIndex: "1000",
      background: "white",
      transform: "skewY(3deg)",
    },
  };
});

const drawStyles = makeStyles()((theme) => {
  return {
    list: {
      [theme.breakpoints.up("xs")]: {
        width: "auto",
      },
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
      },
      [theme.breakpoints.up("md")]: {
        width: 350,
      },
    },
    fullList: {
      width: "auto",
    },
    drawer: {
      [theme.breakpoints.up("xs")]: {
        display: "block",
        textAlign: "right",
        padding: "20px",
      },
      [theme.breakpoints.up("sm")]: {
        display: "block",
        textAlign: "right",
        padding: "20px",
      },
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  };
});

export default function Header() {
  const { classes } = useStyles();
  const { classes2 } = drawStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navLinks.map(({ title, path, locate }) => (
          // <ScrollIntoView selector={locate} key={locate}>
          <a key={locate} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </a>
          // </ScrollIntoView>
        ))}
      </List>
      <Divider />
    </div>
  );

  const navLinks = [
    { title: `Experience`, path: `/`, locate: `#home` },
    { title: `Projects`, path: `/projects`, locate: `#projects` },
    { title: `About`, path: `/about-us`, locate: `#about-us` },
    { title: `Contact`, path: `/contact-us`, locate: `#contact-us` },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={4}></Grid>
              <Grid item xs={8} className={classes.reduceGap}>
                <List className={classes.navDisplayFlex} disablePadding={true}>
                  {navLinks.map(({ title, path, locate }) => (
                    <a key={locate} className={classes.linkText}>
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </a>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
}

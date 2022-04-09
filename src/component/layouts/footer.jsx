import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Container } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import ListItem from "@material-ui/core/ListItem";
import Logo from "./logo-26.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textWhite: {
    color: "black",
    fontSize: "0.875rem",
  },
  iconWhite: {
    color: "black",
    minWidth: "35px",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "70px",
    background: "#fff",
    color: "black",
    padding: "25px 0",
  },
  subHeader: {
    padding: theme.spacing(7),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },

  footer2: {
    color: "#FFF",
    background: "#4B5A5F",
    padding: "1em 0px",
    display: "flex",
    flexDirection: "column",
    left: "0",
    bottom: "0",
    width: "100%",
  },

  logo: {
    objectFit: "contain",
    padding: "1rem",
    width: "100%",

    [theme.breakpoints.up("xs")]: {
      width: "74%",
    },
    // [theme.breakpoints.up("sm")]: {
    //   width: "60%",
    // },
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      {/* <div className={classes.footer}>
        <Container maxWidth="md">
          <Box>
            <Grid container>
              <Grid item xs={12} sm={4} md={4}>
                <Grid item xs={8} sm={8} md={4}>
                  <img className={classes.logo} alt="logo" src={Logo}></img>
                </Grid>
                <ListItem disableGutters={true}>
                  <ListItemText
                    primary="© 2021 Company. All Rights Reserved."
                    style={{
                      fontSize: "12px",
                    }}
                  />
                </ListItem>
              </Grid>

              <Grid item xs={12} sm={4} md={4}>
                <ListItem dense={true}>
                  <ListItemText primary="Our Office" />
                </ListItem>
                <ListItem dense={true}>
                  <ListItemIcon className={classes.iconWhite}>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="No 39, JLN MAS,"
                    secondary={
                      <Typography variant="body1" className={classes.textWhite}>
                        TAMAN MAS, 56000, CHERAS
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem dense={true}>
                  <ListItemIcon className={classes.iconWhite}>
                    <CallIcon />
                  </ListItemIcon>
                  <ListItemText primary="+603403400" />
                </ListItem>
              </Grid>

              <Grid item xs={12} sm={4} md={4}>
                <ListItem dense={true}>
                  <ListItemText primary="Contact Us" />
                </ListItem>
                <ListItem dense={true}>
                  <ListItemIcon className={classes.iconWhite}>
                    <EmailIcon />
                  </ListItemIcon>

                  <ListItemText primary="company_name@email.com" />
                </ListItem>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div> */}
      <div className={classes.footer2}>
        <Grid container>
          <Grid item xs={12}>
            <Box ml={3}>
              <Box>© 2021 Company. All Rights Reserved.</Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

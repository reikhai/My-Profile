import { makeStyles } from "tss-react/mui";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import vmxBG from "../images/vmx_bg.png";
import VMXLogo from "../images/vmx-logo.png";
import foodbankBG from "../images/foodbank_bg.png";
import foodbankLogo from "../images/food-bank-logo.png";
import srBG from "../images/sr-bg.png";
import srLogo from "../images/sr-logo.png";

const useStyles = makeStyles()((theme) => {
  return {
    thirdContent: {
      [theme.breakpoints.up("xs")]: {
        alignItems: "center",
        display: "flex",
        float: "left",
        justifyContent: "space-between",
        width: "100%",
        position: "relative",
        zIndex: "1000",
        background: "linear-gradient(147deg, #000000 0%, #434343 74%)",
      },
      [theme.breakpoints.up("sm")]: {
        // display: "none",
      },
      [theme.breakpoints.up("md")]: {
        alignItems: "center",
        display: "flex",
        float: "left",
        height: "40vh",
        justifyContent: "space-between",
        width: "100%",
        position: "relative",
        zIndex: "1000",
        background: "linear-gradient(147deg, #000000 0%, #434343 74%)",
      },
    },

    projectFrame: {
      width: "155px",
      maxWidth: "155px",
      height: "206px",
      borderRadius: "16px 16px 16px 16px",
      boxShadow: "8px 8px 0px 0px #000000",
      borderWidth: "3px",
      borderStyle: "solid",
      borderColor: "black",
      "&:hover": {
        boxShadow: "none",
      },
    },

    projectThumbnail: {
      textAlign: "center",
      position: "relative",
      margin: "0 auto",
      width: "100%",
    },

    projectTitle: {
      position: "absolute",
      bottom: "90px",
      top: "90px",
      textAlign: "center",
      height: "30px",
      width: "100%",
    },
  };
});

export default function VerticalTabs() {
  const { classes } = useStyles();

  return (
    <section>
      <div className={classes.thirdContent} id="project">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={4}>
              <Box className={classes.projectThumbnail}>
                <img src={srBG} className={classes.projectFrame} />
                <Box className={classes.projectTitle}>
                  <img
                    src={srLogo}
                    style={{
                      maxWidth: "155px",
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Box className={classes.projectThumbnail}>
                <img src={foodbankBG} className={classes.projectFrame} />
                <Box className={classes.projectTitle}>
                  <img
                    src={foodbankLogo}
                    style={{
                      maxWidth: "35px",
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Box className={classes.projectThumbnail}>
                <img className={classes.projectFrame} src={vmxBG} />
                <Box className={classes.projectTitle}>
                  <img
                    src={VMXLogo}
                    style={{
                      maxWidth: "35px",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
}

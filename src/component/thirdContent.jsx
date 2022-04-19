import { makeStyles } from "tss-react/mui";
import * as React from "react";
import { Container, Box, Grid } from "@mui/material";
import vmxBG from "../images/vmx_bg.png";
import VMXLogo from "../images/vmx-logo.png";
import foodbankBG from "../images/foodbank_bg.png";
import foodbankLogo from "../images/food-bank-logo.png";
import srBG from "../images/sr-bg.png";
import srLogo from "../images/sr-logo.png";
import { motion } from "framer-motion";

const useStyles = makeStyles()((theme) => {
  const customeColor = theme.palette.primary.main;
  const bgColor = theme.palette.background.default;

  return {
    thirdContent: {
      [theme.breakpoints.up("xs")]: {
        alignItems: "center",
        display: "flex",
        float: "left",
        justifyContent: "center",
        width: "100%",
        zIndex: "1000",
        background: `linear-gradient(147deg, #000000 0%, ${bgColor} 74%)`,
        padding: "40px 0px",
      },
      [theme.breakpoints.up("sm")]: {
        // display: "none",
      },
      [theme.breakpoints.up("md")]: {
        alignItems: "center",
        display: "flex",
        float: "left",
        height: "40vh",
        justifyContent: "center",
        width: "100%",
        zIndex: "1000",
        padding: "15px 30px",
        background: `linear-gradient(147deg, #000000 0%, ${bgColor} 74%)`,
      },
    },

    projectFrame: {
      width: "155px",
      maxWidth: "155px",
      height: "206px",
      borderRadius: "16px 16px 16px 16px",
      boxShadow: "none",
      borderWidth: "3px",
      borderStyle: "solid",
      borderColor: "black",
      "&:hover": {
        boxShadow: `8px 8px 0px 0px ${customeColor}`,
        borderColor: `${customeColor}`,
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
      <div
        className={classes.thirdContent}
        id="project"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={4} md={4}>
              <motion.div
                className={classes.projectThumbnail}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <img src={srBG} className={classes.projectFrame} />
                <Box className={classes.projectTitle}>
                  <img
                    src={srLogo}
                    style={{
                      maxWidth: "155px",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={6} sm={4} md={4}>
              <motion.div
                className={classes.projectThumbnail}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <img src={foodbankBG} className={classes.projectFrame} />
                <Box className={classes.projectTitle}>
                  <img
                    src={foodbankLogo}
                    style={{
                      maxWidth: "35px",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={6} sm={4} md={4}>
              <motion.div
                className={classes.projectThumbnail}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <img className={classes.projectFrame} src={vmxBG} />
                <Box className={classes.projectTitle}>
                  <img
                    src={VMXLogo}
                    style={{
                      maxWidth: "35px",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
}

import { makeStyles } from "tss-react/mui";
import * as React from "react";
import {
  Container,
  Box,
  Grid,
  Link,
  Card,
  CardMedia,
  Stack,
  CardActionArea,
  CardActions,
} from "@mui/material";
import reactjs from "../images/icons8-react.svg";
import laravel from "../images/laravel-2.svg";
import bootstrap from "../images/bootstrap-4.svg";
import materialUI from "../images/material-ui-1.svg";
import js from "../images/icons8-javascript.svg";

import vmxBG from "../images/vmx_bg.png";
import srBG from "../images/sr-bg.png";
import srLogo from "../images/sr-logo.png";
import mjLogo from "../images/mj-logo.png";
import flutter from "../images/flutter.svg";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

const useStyles = makeStyles()((theme) => {
  const customeColor = theme.palette.primary.main;
  const bgColor = theme.palette.background.default;
  const sectionGradient =
    theme.palette.mode === "light"
      ? `linear-gradient(147deg, ${alpha("#0f172a", 0.06)} 0%, ${bgColor} 74%)`
      : `linear-gradient(147deg, #0a0d12 0%, ${bgColor} 74%)`;

  return {
    thirdContent: {
      [theme.breakpoints.up("xs")]: {
        alignItems: "center",
        display: "flex",
        float: "left",
        justifyContent: "center",
        width: "100%",
        zIndex: "1000",
        background: sectionGradient,
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
        background: sectionGradient,
      },
    },

    projectFrame: {
      width: "180px",
      maxWidth: "180px",
      // height: "206px",
      borderRadius: "16px 16px 16px 16px!important",
      boxShadow: "none",
      borderWidth: "3px",
      borderStyle: "solid",
      borderColor: alpha(theme.palette.text.primary, 0.12),
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
                <Card className={classes.projectFrame}>
                  <Link
                    href="https://smart-reward.com/"
                    underline="none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="206"
                        image={srBG}
                        alt="Smart Reward"
                      />
                      <Box className={classes.projectTitle}>
                        <img
                          src={srLogo}
                          style={{
                            maxWidth: "155px",
                          }}
                        />
                      </Box>
                    </CardActionArea>
                  </Link>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Stack direction="row" spacing={4}>
                      <img src={laravel} width={20} />
                      <img src={bootstrap} width={20} />
                      <img src={js} width={20} />
                    </Stack>
                  </CardActions>
                </Card>
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
                <Card className={classes.projectFrame}>
                  <Link
                    href="https://dessert-demo.netlify.app/"
                    underline="none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="206"
                        image={vmxBG}
                        alt="Demo"
                      />
                      <Box className={classes.projectTitle}>
                        <Typography component={"span"} variant={"h4"}>
                          Portfolio
                        </Typography>
                      </Box>
                    </CardActionArea>
                  </Link>

                  <CardActions sx={{ justifyContent: "center" }}>
                    <Stack direction="row" spacing={4}>
                      <img src={reactjs} width={20} />
                      <img src={materialUI} width={20} />
                    </Stack>
                  </CardActions>
                </Card>
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
                <Card className={classes.projectFrame}>
                  <Link
                    href="https://apps.apple.com/us/app/%E9%BA%BB%E5%B0%86%E8%BF%90%E5%8A%BF%E6%B5%8B%E7%AE%97/id6745542083"
                    underline="none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="206"
                        image={mjLogo}
                        alt="麻将运势测算（App Store）"
                        sx={{ objectFit: "cover" }}
                      />
                    </CardActionArea>
                  </Link>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Stack direction="row" spacing={4}>
                      <img src={flutter} width={20} alt="Flutter" />
                    </Stack>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
}

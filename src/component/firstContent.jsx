import React from "react";
import { makeStyles } from "tss-react/mui";
import { Box } from "@mui/material";
import html from "../images/icons8-html-5.svg";
import css from "../images/icons8-css3.svg";
import js from "../images/icons8-javascript.svg";
import vuejs from "../images/icons8-vue-js.svg";
import reactjs from "../images/icons8-react.svg";
import laravel from "../images/laravel-2.svg";
import bootstrap from "../images/bootstrap-4.svg";
import materialUI from "../images/material-ui-1.svg";
import khai from "../images/khai.jpg";
import { motion } from "framer-motion";

const useStyles = makeStyles()((theme) => {
  const bgColor = theme.palette.background.default;

  return {
    reduceGap: {
      justifyContent: "flex-end",
      display: "grid",
    },

    firstContent: {
      alignItems: "center",
      display: "flex",
      float: "left",
      height: "60vh",
      justifyContent: "center",
      width: "100%",
      position: "relative",
      zIndex: "1000",
      padding: "15px 30px",
      background: `linear-gradient(147deg, #000000 0%, ${bgColor} 74%)`,
    },

    fontStyle: {
      float: "left",
      width: "35%",
      "& h2": {
        float: `left`,
        fontSize: "48px",
        fontWeight: 800,
        margin: 0,
        padding: 0,
        width: "100%",
      },
      "& h4": {
        float: "left",
        margin: "0 0 15px",
        padding: 0,
        width: "100%",
      },
      "& p": {
        margin: 0,
        padding: 0,
      },
    },

    skillContent: {
      "& .skills": {
        display: "inline-flex",
        alignItems: "center",
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
  };
});

export default function FirstContent({ modeChange, theme }) {
  const { classes } = useStyles();
  const skills = [
    html,
    css,
    js,
    vuejs,
    reactjs,
    laravel,
    bootstrap,
    materialUI,
  ];

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <>
      <section>
        <Box
          className={classes.firstContent}
          id="profile"
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <motion.div
            className={classes.fontStyle}
            initial="hidden"
            animate="visible"
            variants={list}
          >
            <motion.h2 variants={item}>Rei Khai</motion.h2>

            <motion.h4 variants={item}>
              Front-End Developer | 3 years Eperiences
            </motion.h4>

            <motion.p variants={item}>
              Hi, I'm Rei Khai from Selangor, Malaysia. I'm an experienced
              Front-End Developer with a demonstrated history of working in the
              information technology and services industry.
            </motion.p>

            <motion.div className={classes.skillContent} variants={item}>
              <div className="skills">
                <label>Skills:</label>
                {skills.map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img src={value} width={30} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={classes.myProfile}
            initial={{ y: "50%", opacity: "0", scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: "1.6", ease: "easeOut" }}
          >
            <img src={khai} />
          </motion.div>
        </Box>
      </section>
    </>
  );
}

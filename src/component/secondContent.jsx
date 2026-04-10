import { makeStyles } from "tss-react/mui";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { motion } from "framer-motion";
import { alpha } from "@mui/material/styles";

const ANGLE_IMG = "https://www.shanemielke.com/img/angle_top.png";

const EXP_DATA = [
  {
    company: "UP Devlabs Pte Ltd, Singapore (Full-time)",
    workDuration: "June 2022 — Present",
    role: "Frontend Engineer",
    exp: [
      "Translated UX and business requirements into elegant code solutions.",
      "Optimizes website load times by utilizing efficient front-end technologies and caching techniques.",
      "Developed reusable components, enhancing code efficiency and reducing development time across multiple projects.",
      "Collaborated with web designers, back-end developers, and business analysts to successfully achieve project goals, enhancing team productivity and project outcomes.",
      "Built cross-platform mobile apps (iOS & Android) using Flutter.",
      "Implemented Shorebird for OTA updates, reducing release turnaround time.",
      "Integrated Apple & Google social login for seamless authentication.",
      "Developed hot update system for dynamic content delivery without app redeploy.",
    ],
  },
  {
    company: "Lockswitch Sdn Bhd, Malaysia (Full-time)",
    workDuration: "January 2022 — May 2022",
    role: "Frontend Developer",
    exp: [
      "Enhanced the user interface of the current CMS website, resulting in improved user engagement and satisfaction.",
      "Developed a test script using Cypress to enhance system reliability and ensure comprehensive testing coverage.",
      "Standardized components across the codebase.",
    ],
  },
  {
    company: "ISCity Sdn Bhd, Malaysia (Full-time)",
    workDuration: "March 2020 — December 2021",
    role: "Software Engineer",
    exp: [
      "Identified, diagnosed, and resolved website bugs.",
      "Developed an e-commerce platform utilizing the Laravel framework (PHP) for back-end development, and implemented jQuery and Bootstrap for front-end design, resulting in enhanced user experience and increased site performance.",
    ],
  },
];

const useStyles = makeStyles()((theme) => {
  const colorText = theme.palette.text.primary;
  const bgColor =
    theme.palette.mode === "dark"
      ? `linear-gradient(147deg, ${alpha("#000000", 0.65)} 0%, ${theme.palette.background.default} 74%)`
      : theme.palette.background.paper;

  return {
    secondContent: {
      alignItems: "center",
      display: "flex",
      float: "left",
      justifyContent: "center",
      width: "100%",
      position: "relative",
      zIndex: 1000,
      background: bgColor,
      color: colorText,
      [theme.breakpoints.up("md")]: {
        padding: "15px 30px",
      },
    },

    mobileView: {
      display: "block",
      width: "100%",
      maxWidth: 900,
      margin: "0 auto",
      position: "relative",
      zIndex: 1000,
      padding: "15px 30px",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },

    webView: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        flexGrow: 1,
        display: "contents",
        height: 260,
        maxWidth: 900,
        margin: "0 auto",
      },
    },

    angleTop: {
      display: "block",
      position: "absolute",
      top: -29,
      left: 0,
      width: "100%",
      height: 30,
      backgroundImage: `url(${ANGLE_IMG})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "100% 100%",
      imageRendering: "-webkit-optimize-contrast",
      zIndex: 9999,
    },

    expList: {
      margin: 0,
      paddingLeft: theme.spacing(2.5),
      "& li": {
        marginBottom: theme.spacing(0.75),
      },
    },
  };
});

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2, px: 0, pb: 0 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function SecondContent() {
  const [value, setValue] = useState(0);
  const { classes } = useStyles();

  return (
    <section>
      <motion.div
        initial={{ y: "50%", opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className={classes.secondContent}
        id="experience"
      >
        <div className={classes.angleTop} aria-hidden />

        <Box className={classes.mobileView}>
          <Tabs
            value={value}
            onChange={(_, newValue) => setValue(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            {EXP_DATA.map((item, index) => (
              <Tab key={item.company} label={item.company} {...a11yProps(index)} />
            ))}
          </Tabs>
          {EXP_DATA.map((item, index) => (
            <TabPanel key={item.company} value={value} index={index}>
              <Typography component="div" variant="body2" fontWeight={600}>
                {item.role}
              </Typography>
              <Typography component="div" variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
                {item.workDuration}
              </Typography>
              <Box component="ul" className={classes.expList}>
                {item.exp.map((line, i) => (
                  <Typography key={i} component="li" variant="body2">
                    {line}
                  </Typography>
                ))}
              </Box>
            </TabPanel>
          ))}
        </Box>

        <Box className={classes.webView}>
          <Timeline position="alternate">
            {EXP_DATA.map((item, index) => (
              <TimelineItem key={item.company}>
                <TimelineSeparator>
                  <TimelineDot color={index === 0 ? "secondary" : "success"} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle2" component="div" gutterBottom>
                    {item.workDuration}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {item.company} · {item.role}
                  </Typography>
                  {item.exp.map((line, i) => (
                    <Typography key={i} component="div" variant="caption" display="block" sx={{ mb: 0.5 }}>
                      {line}
                    </Typography>
                  ))}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </motion.div>
    </section>
  );
}

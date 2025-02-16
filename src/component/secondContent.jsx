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

const useStyles = makeStyles()((theme) => {
  const colorText = theme.palette.text.primary;
  const bgColor =
    theme.palette.mode === "dark"
      ? `linear-gradient(147deg, #000000 0%, ${theme?.palette?.background?.default} 74%)`
      : "#fff";

  return {
    secondContent: {
      [theme.breakpoints.up("xs")]: {
        alignItems: "center",
        display: "flex",
        float: "left",
        justifyContent: "center",
        width: "100%",
        position: "relative",
        zIndex: "1000",
        // padding: "15px 30px",
        background: `${bgColor}`,
        color: `${colorText}`,
      },
      [theme.breakpoints.up("sm")]: {
        // display: "none",
      },
      [theme.breakpoints.up("md")]: {
        alignItems: "center",
        display: "flex",
        float: "left",
        justifyContent: "center",
        width: "100%",
        position: "relative",
        zIndex: "1000",
        padding: "15px 30px",
        background: `${bgColor}`,
        color: `${colorText}`,
      },
    },

    mobileView: {
      [theme.breakpoints.up("xs")]: {
        display: "block",
        width: "100%",
        margin: "0px auto",
        maxWidth: "900px",
        justifyContent: "center",
        width: "100%",
        position: "relative",
        zIndex: "1000",
        padding: "15px 30px",
        height:'100vh',
      },
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
      [theme.breakpoints.up("md")]: {
        display: `none`,
      },
    },

    webView: {
      [theme.breakpoints.up("xs")]: {
        display: "none",
      },
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
      [theme.breakpoints.up("md")]: {
        flexGrow: 1,
        display: "contents",
        height: 260,
        maxWidth: "900px",
        margin: "0px auto",
      },
    },

    angleTop: {
      display: "block",
      position: "absolute",
      top: "-29px",
      left: 0,
      width: "100%",
      height: "30px",
      backgroundImage: `url(${"https://www.shanemielke.com/img/angle_top.png"})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "100% 100%",
      imageRendering: "-webkit-optimize-contrast",
      zIndex: 9999,
    },

    angleBottom: {
      display: "block",
      position: "absolute",
      bottom: "-29px",
      left: 0,
      width: "100%",
      height: "30px",
      backgroundImage: `url(${"https://www.shanemielke.com/img/angle_bottom.png"})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "100% 100%",
      imageRendering: "-webkit-optimize-contrast",
      zIndex: 9999,
    },
  };
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

export default function ColorsTimeline() {
  const [value, setValue] = useState(0);
  const { classes } = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const expData = [
    {
      company:'UP DEVLABS Pte Ltd (Full-time)',
      workDuration: 'June 2022 — Present ',
      role:'Front-end Software Developer',
      exp:[
          'Translated UX and business requirements into elegant code solutions.',
          'Optimizes website load times by utilizing efficient front-end technologies and caching techniques.',
          'Developed reusable components, enhancing code efficiency and reducing development time across multiple projects',
          'Collaborated with web designers, back end developers, and business analysts to successfully achieve project goals,enhancing team productivity and project outcomes.',
          ],
    },
    {
      company:'Lockswitch Sdn Bhd (Full-time)',
      workDuration: 'January 2022 — May 2022',
      role:'Front-end Software Developer',
      exp:[
          'Enhanced the user interface of the current CMS website, resulting in improved user engagement and satisfaction',
          'Developed a test script using Cypress to enhance system reliability and ensure comprehensive testing coverage.',
          'Standardized component'
          ],
    },
    {
      company:'ISCITY Sdn Bhd (Full-time)',
      workDuration: 'March 2020 — December 2021',
      role:'Software Developer',
      exp:[
          'Worked as a productive and positive team member to design,code, test and debug operations.',
          'Managed front-end and back-end development in various project.',
          'Successfully identified, diagnosed, and fixed website bugs.',
          'Worked on E-commerce project with Laravel Framework (PHP) as back-end, JQuery and Bootstrap as front-end.',
          'Developed standardized and maintainable code that able to use in various new project.',
          'Develop CMS in react.js'
          ],
    },
    {
      company:'ISCITY Sdn Bhd (Part-time)',
      workDuration: 'January 2019 — March 2020',
      role:'Software Developer',
      exp:[
            'Build and enhance website',
            'Enhance Product Management in Admin n Merchant Site',
            'Social login integration',
          ],
    },
    {
      company:'ISCITY Sdn Bhd (Internship)',
      workDuration: 'September 2018 — December 2018',
      role:'Software Developer',
      exp:[
        'Build and implement new web features',
        'Help enhance website look awesome',
        'Solve website bugs',
        'Understand Laravel framework structure'
      ],
    },
  ]

  return (
    <section>
      <motion.div
        initial={{ y: "50%", opacity: "0", scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: "1.6", ease: "easeOut" }}
        className={classes.secondContent}
        id="experience"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <div className={classes.angleTop}></div>

        <Box className={classes.mobileView}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {expData.map((item,index) => {
               return (
                <Tab key={index} label={item.company} {...a11yProps(index)} />
              );
            })}
          </Tabs>
          {expData.map((item,index) => {
              return (
              <TabPanel key={index} value={value} index={index}>
                <Typography component={"span"} variant={"body2"}>
                  {item.role}
                </Typography>
                <br></br>
                <Typography component={"span"} variant={"caption"}>
                  {item.workDuration}
                </Typography>
                <br></br>
                <Typography component={"span"} variant={"caption"}>
                  {item.exp.map((v,i) => {
                    return (
                      <li key={i}>{v}</li>
                    )
                  })}
                </Typography>
              </TabPanel>
            );
          })}

        </Box>

        <Box className={classes.webView}>
          <Timeline position="alternate">
            {expData.map((item,index) => {
               return (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color={index === 0 ? 'secondary' : 'success'} />
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent>
                    <Typography>
                      {item.workDuration} ({item.company} - {item.role})
                    </Typography>
                    {item.exp.map((v,i) => {
                      return (
                        <Typography component={"div"} variant={"caption"} key={i}>
                          {v}
                        </Typography>
                      )
                    })}
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </Box>

        {/* <div className={classes.angleBottom}></div> */}
      </motion.div>
    </section>
  );
}

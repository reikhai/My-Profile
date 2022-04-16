import { makeStyles } from "tss-react/mui";
import * as React from "react";
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

const useStyles = makeStyles()((theme) => {
  return {
    secondContent: {
      [theme.breakpoints.up("xs")]: {
        alignItems: "center",
        display: "flex",
        float: "left",
        justifyContent: "space-between",
        width: "100%",
        position: "relative",
        zIndex: "1000",
        background: "white",
      },
      [theme.breakpoints.up("sm")]: {
        // display: "none",
      },
      [theme.breakpoints.up("md")]: {
        alignItems: "center",
        display: "flex",
        float: "left",
        // height: "40vh",
        justifyContent: "space-between",
        width: "100%",
        position: "relative",
        zIndex: "1000",
        background: "white",
        transform: "skewY(-3deg)",
      },
    },

    withoutRotate: {
      [theme.breakpoints.up("xs")]: {
        transform: "none",
      },
      [theme.breakpoints.up("sm")]: {
        //   transform: "skewY(3deg)",
      },
      [theme.breakpoints.up("md")]: {
        //   transform: "skewY(3deg)",
      },
    },

    mobileView: {
      [theme.breakpoints.up("xs")]: {
        display: "block",
        width: "100%",
        //   transform: "skewY(3deg)",
        margin: "0px auto",
        maxWidth: "900px",
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
        // display: "block",
        flexGrow: 1,
        display: "contents",
        height: 260,
        maxWidth: "900px",
        margin: "0px auto",
        // transform: "skewY(3deg)",
      },
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
  const [value, setValue] = React.useState(0);
  const { classes } = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <div className={classes.secondContent}>
        <Box className={classes.mobileView}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Lockswitch" {...a11yProps(0)} />
            <Tab label="ISCITY (Full Time)" {...a11yProps(1)} />
            <Tab label="ISCITY (Part Time)" {...a11yProps(2)} />
            <Tab label="ISCITY (Internship)" {...a11yProps(3)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Typography component={"span"} variant={"body2"}>
              Front-End Web Developer
            </Typography>
            <br></br>
            <Typography component={"span"} variant={"caption"}>
              January 2022 — Present
            </Typography>
            <br></br>
            <Typography component={"span"} variant={"caption"}>
              <li>Enchance current CMS User Interface</li>
              <li>Resolved bugs</li>
              <li>Write test script (cypress)</li>
            </Typography>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Typography component={"span"} variant={"body2"}>
              Software Developer
            </Typography>
            <br></br>
            <Typography component={"span"} variant={"caption"}>
              March 2020 — December 2021
            </Typography>
            <Typography component={"span"} variant={"caption"}>
              <li>
                Worked as a productive and positive team member to design, code,
                test and debug operations.
              </li>
              <li>
                Managed front-end and back-end development in various project.
              </li>
              <li>
                Successfully identified, diagnosed, and fixed website bugs.
              </li>
              <li>
                Worked on E-commerce project with Laravel Framework (PHP) as
                back-end, JQuery and Bootstrap as front-end.
              </li>
              <li>
                Developed standardized and maintainable code that able to use in
                various new project.
              </li>
              <li>Develop CMS in react.js</li>
            </Typography>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Typography component={"span"} variant={"body2"}>
              Software Developer
            </Typography>
            <br></br>
            <Typography component={"span"} variant={"caption"}>
              January 2019 — March 2020
            </Typography>
            <Typography component={"span"} variant={"caption"}>
              <li>Build and enhance website</li>
              <li>Enhance Product Management in Admin n Merchant Site</li>
              <li>Social login integration</li>
            </Typography>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <Typography component={"span"} variant={"body2"}>
              Software Developer
            </Typography>
            <br></br>
            <Typography component={"span"} variant={"caption"}>
              September 2018 — December 2018
            </Typography>

            <Typography component={"span"} variant={"caption"}>
              <li>Build and implement new web features</li>
              <li>Help enhance website look awesome</li>
              <li>Solve website bugs</li>
              <li>Understand Laravel framework structure</li>
            </Typography>
          </TabPanel>
        </Box>

        <Box className={classes.webView}>
          <Timeline position="alternate" style={{ transform: "skewY(3deg)" }}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>January 2022 — Present</TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography>JanuaryMarch 2020 — December 2021</Typography>

                <Typography component={"div"} variant={"caption"}>
                  Worked as a productive and positive team member to design,
                  code, test and debug operations.
                </Typography>
                <Typography component={"div"} variant={"caption"}>
                  Managed front-end and back-end development in various project.
                </Typography>
                <Typography component={"div"} variant={"caption"}>
                  Successfully identified, diagnosed, and fixed website bugs.
                </Typography>
                <Typography component={"div"} variant={"caption"}>
                  Worked on E-commerce project with Laravel Framework (PHP) as
                  back-end, JQuery and Bootstrap as front-end.
                </Typography>
                <Typography component={"div"} variant={"caption"}>
                  Developed standardized and maintainable code that able to use
                  in various new project.
                </Typography>
                <Typography component={"div"} variant={"caption"}>
                  Develop CMS in react.js
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography>January 2019 — March 2020</Typography>
                <Typography component={"div"} variant={"caption"}>
                  Build and enhance website
                </Typography>
                <Typography component={"div"} variant={"caption"}>
                  Enhance Product Management in Admin n Merchant Site
                </Typography>
                <Typography component={"div"} variant={"caption"}>
                  Social login integration
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="success" />
              </TimelineSeparator>
              <TimelineContent>
                <Typography>September 2018 — December 2018</Typography>
                <Typography component={"div"} variant={"caption"}>
                  Build and implement new web features
                </Typography>

                <Typography component={"div"} variant={"caption"}>
                  Help enhance website look awesome
                </Typography>
                <Typography component={"div"} variant={"caption"}>
                  Solve website bugs
                </Typography>
                <Typography component={"div"} variant={"caption"}>
                  Understand Laravel framework structure
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </div>
    </section>
  );
}

// <section>
//   <div className={classes.secondContent}>
//         <Box className={classes.webView}>
//           <Tabs
//             orientation="vertical"
//             variant="scrollable"
//             value={value}
//             onChange={handleChange}
//             aria-label="Vertical tabs example"
//             sx={{ borderRight: 1, borderColor: "divider" }}
//           >
//             <Tab label="Lockswitch" {...a11yProps(0)} />
//             <Tab label="ISCITY (Full Time)" {...a11yProps(1)} />
//             <Tab label="ISCITY (Part Time)" {...a11yProps(2)} />
//             <Tab label="ISCITY (Internship)" {...a11yProps(3)} />
//           </Tabs>
//           <TabPanel value={value} index={0}>
//             <Typography component={"span"} variant={"body2"}>
//               Front-End Web Developer
//             </Typography>
//             <br></br>
//             <Typography component={"span"} variant={"caption"}>
//               January 2022 — Present
//             </Typography>
//             <br></br>
//             <Typography component={"span"} variant={"caption"}>
//               <ul>
//                 <li>Enchance current CMS User Interface</li>
//                 <li>Resolved bugs</li>
//                 <li>Write test script (cypress)</li>
//               </ul>
//             </Typography>
//           </TabPanel>

//           <TabPanel value={value} index={1}>
//             <Typography component={"span"} variant={"body2"}>
//               Software Developer
//             </Typography>
//             <br></br>
//             <Typography component={"span"} variant={"caption"}>
//               March 2020 — December 2021
//             </Typography>
//             <Typography component={"span"} variant={"caption"}>
//               <ul>
//                 <li>
//                   Worked as a productive and positive team member to design,
//                   code, test and debug operations.
//                 </li>
//                 <li>
//                   Managed front-end and back-end development in various project.
//                 </li>
//                 <li>
//                   Successfully identified, diagnosed, and fixed website bugs.
//                 </li>
//                 <li>
//                   Worked on E-commerce project with Laravel Framework (PHP) as
//                   back-end, JQuery and Bootstrap as front-end.
//                 </li>
//                 <li>
//                   Developed standardized and maintainable code that able to use
//                   in various new project.
//                 </li>
//                 <li>Develop CMS in react.js</li>
//                 <li>Revamp old CMS in react.js</li>
//               </ul>
//             </Typography>
//           </TabPanel>

//           <TabPanel value={value} index={2}>
//             <Typography component={"span"} variant={"body2"}>
//               Software Developer
//             </Typography>
//             <br></br>
//             <Typography component={"span"} variant={"caption"}>
//               January 2019 — March 2020
//             </Typography>
//             <Typography component={"span"} variant={"caption"}>
//               <ul>
//                 <li>Build and enhance website</li>
//                 <li>Enhance Product Management in Admin n Merchant Site</li>
//                 <li>Social login integration</li>
//               </ul>
//             </Typography>
//           </TabPanel>

//           <TabPanel value={value} index={3}>
//             <Typography component={"span"} variant={"body2"}>
//               Software Developer
//             </Typography>
//             <br></br>
//             <Typography component={"span"} variant={"caption"}>
//               September 2018 — December 2018
//             </Typography>
//             <Typography component={"span"} variant={"caption"}>
//               <ul>
//                 <li>Build and implement new web features</li>
//                 <li>Help enhance website look awesome</li>
//                 <li>Solve website bugs</li>
//                 <li>Understand Laravel framework structure</li>
//               </ul>
//             </Typography>
//           </TabPanel>
//         </Box>
//       </div>
//     </section>

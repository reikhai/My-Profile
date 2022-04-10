import React from "react";
import { makeStyles } from "tss-react/mui";
import FirstContent from "./firstContent";
import SecondContent from "./secondContent";
import ThirdContent from "./thirdContent";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    scrollToElement: {
      position: "relative",
      width: "100%",
      background: "#fff",
      paddingTop: "50px",
      overflow: "hidden",
      zIndex: "2",
    },
    letterSpacing: {
      letterSpacing: ".25em",
      color: "#fb8351",
    },
  };
});

export default function Home() {
  const classes = useStyles();
  console.log(classes);
  return (
    <>
      <div className={classes.root}>
        <FirstContent />
        <SecondContent />
        <ThirdContent />
      </div>
    </>
  );
}

import React from "react";
import { Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Typography className={classes.typography} variant="h3">
        <span className={classes.span}>
          {"🙶\n"} INDIVIDUAL COMMITMENT TO A GROUP EFFORT-
        </span>
        THAT IS WHAT MAKES A TEAM WORK, A COMPANY WORK, A SOCIETY WORK, A
        CIVILIZATION WORK {"\n🙸"}
      </Typography>
      <div className={classes.button}></div>
    </div>
  );
};

export default Home;

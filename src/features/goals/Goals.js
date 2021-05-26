import React from "react";
import Goal from "../goal/Goal";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { selectGoals } from "./goalsSlice";
import { useSelector } from "react-redux";

const styles = {
  paper: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    maxHeight: "18rem",
    overflowY: "auto",
  },
};

function Goals({ classes }) {
  const goals = useSelector(selectGoals);

  return (
    <Paper className={classes.paper}>
      <Grid container justify="center" className={classes.gridContainer}>
        {Object.entries(goals).map((goal) => (
          <Goal key={goal[1].id} goal={goal[1]} />
        ))}
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(Goals);

import React from "react";
import Goal from "../goal/Goal";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

const styles = {
  paper: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
};

function Goals({ goals, markAsComplete, classes, removeGoal }) {
  return (
    <Paper className={classes.paper}>
      <Grid container justify="center">
        {Object.entries(goals).map((goal) => (
          <Goal
            key={goal[1].id}
            goal={goal[1]}
            markAsComplete={markAsComplete}
            removeGoal={removeGoal}
          />
        ))}
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(Goals);

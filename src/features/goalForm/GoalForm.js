import React, { useState } from "react";
import { TextField, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  paper: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: "1rem",
    boxSizing: "border-box",
  },
  h2: {
    margin: "0",
  },
};

function GoalForm({ addGoal, classes }) {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoal(goal);
    setGoal("");
  };

  return (
    <Paper className={classes.paper}>
      <h2 className={classes.h3}>What are your goals for today?</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          value={goal}
          onChange={(e) => setGoal(e.currentTarget.value)}
          label="New Goal"
        />
      </form>
    </Paper>
  );
}

export default withStyles(styles)(GoalForm);

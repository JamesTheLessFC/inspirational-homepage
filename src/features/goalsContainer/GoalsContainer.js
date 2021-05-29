import React, { useState } from "react";
import Goals from "../goals/Goals";
import GoalForm from "../goalForm/GoalForm";
import { v4 as uuidv4 } from "uuid";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  gridContainer: {
    flexWrap: "no-wrap",
    justifyContent: "center",
  },
};

function GoalsContainer({ classes, rainConfetti }) {
  const [goals, setGoals] = useState({
    id1: {
      id: "id1",
      text: "Make dinner",
      complete: false,
    },
    id2: {
      id: "id2",
      text: "Water plants",
      complete: false,
    },
    id3: {
      id: "id3",
      text: "Do homework",
      complete: false,
    },
  });

  const markAsComplete = (goalId) => {
    setGoals((prevGoals) => ({
      ...prevGoals,
      [goalId]: {
        ...prevGoals[goalId],
        complete: true,
      },
    }));
  };

  const addGoal = (text) => {
    if (text) {
      const newGoalId = uuidv4();
      setGoals((prevGoals) => ({
        ...prevGoals,
        [newGoalId]: {
          id: newGoalId,
          complete: false,
          text,
        },
      }));
    }
  };

  const removeGoal = (id) => {
    setGoals((prevGoals) => {
      const newGoals = Object.keys(prevGoals).reduce((obj, key) => {
        if (key !== id) {
          obj[key] = prevGoals[key];
        }
        return obj;
      }, {});
      return newGoals;
    });
  };

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={11} sm={9} md={7} lg={6}>
        <GoalForm addGoal={addGoal} />
      </Grid>
      <Grid item xs={12}>
        <br />
      </Grid>
      <Grid item xs={11} sm={9} md={7} lg={6}>
        <Goals
          goals={goals}
          markAsComplete={markAsComplete}
          removeGoal={removeGoal}
          rainConfetti={rainConfetti}
        />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(GoalsContainer);

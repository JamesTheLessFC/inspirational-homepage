import React, { useState } from "react";
import { Paper, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const styles = {
  paper: {
    backgroundColor: "rgb(97, 71, 150)",
    padding: "1rem",
    margin: "1rem",
    color: "white",
    position: "relative",
  },
  removeButton: {
    position: "absolute",
    top: "-0.9rem",
    right: "1.75rem",
  },
  doneButton: {
    position: "absolute",
    top: "-0.9rem",
    right: "0",
    color: "green",
  },
};

function Goal({ goal, markAsComplete, classes, removeGoal }) {
  const { text, complete, id } = goal;
  const [displayButtons, setDisplayButtons] = useState(false);

  const handleDoneClick = () => {
    markAsComplete(id);
  };

  const handleRemoveClick = () => {
    removeGoal(id);
  };

  const handleMouseEnter = () => {
    setDisplayButtons(true);
  };

  const handleMouseLeave = () => {
    setDisplayButtons(false);
  };

  return (
    <Paper
      className={classes.paper}
      elevation={5}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ opacity: complete ? "0.5" : "1" }}
    >
      {text}
      <IconButton
        color="secondary"
        className={classes.removeButton}
        size="small"
        onClick={handleRemoveClick}
        style={{ display: displayButtons ? "block" : "none" }}
      >
        <HighlightOffIcon />
      </IconButton>
      <IconButton
        className={classes.doneButton}
        onClick={handleDoneClick}
        disabled={complete}
        size="small"
        style={{ display: displayButtons ? "block" : "none" }}
      >
        <CheckCircleOutlineIcon />
      </IconButton>
    </Paper>
  );
}

export default withStyles(styles)(Goal);

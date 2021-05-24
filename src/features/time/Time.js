import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import dayjs from "dayjs";

const styles = {
  timeContainer: {
    marginLeft: "1rem",
    textAlign: "left",
  },
  time: {
    color: "white",
    marginBottom: "0",
  },
  ampm: {
    fontSize: "1.5rem",
  },
  date: {
    color: "white",
    marginTop: ".5rem",
  },
};

function Time({ classes }) {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(dayjs());
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className={classes.timeContainer}>
      <h1 className={classes.time}>
        {time.format("h")}:{time.format("mm")}&nbsp;
        <span className={classes.ampm}>{time.format("A")}</span>
      </h1>
      <p className={classes.date}>
        {time.format("dddd")},&nbsp;{time.format("MMM")}&nbsp;
        {time.format("DD")}
      </p>
    </div>
  );
}

export default withStyles(styles)(Time);

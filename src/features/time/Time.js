import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import dayjs from "dayjs";
import { setTime, selectTime } from "./timeSlice";
import { useSelector, useDispatch } from "react-redux";

const styles = {
  timeContainer: {
    margin: "0 1rem",
    textAlign: "left",
  },
  time: {
    color: "white",
    marginBottom: "0",
    marginTop: "0",
  },
  ampm: {
    fontSize: "1.5rem",
  },
  date: {
    color: "white",
    marginTop: ".5rem",
    marginBottom: "0",
  },
};

function Time({ classes }) {
  const time = useSelector(selectTime);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = {
        hours: dayjs().format("h"),
        minutes: dayjs().format("mm"),
        ampm: dayjs().format("A"),
        weekday: dayjs().format("ddd"),
        month: dayjs().format("MMM"),
        day: dayjs().format("DD"),
      };
      dispatch(setTime(newTime));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className={classes.timeContainer}>
      <h1 className={classes.time}>
        {time.hours}:{time.minutes}&nbsp;
        <span className={classes.ampm}>{time.ampm}</span>
      </h1>
      <p className={classes.date}>
        {time.weekday},&nbsp;{time.month}&nbsp;
        {time.day}
      </p>
    </div>
  );
}

export default withStyles(styles)(Time);

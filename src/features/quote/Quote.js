import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { selectQuote, fetchQuote } from "./quoteSlice";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const styles = {
  div: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "1rem",
    boxSizing: "border-box",
  },
  text: {
    color: "white",
    fontStyle: "italic",
    margin: "0",
  },
  author: {
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: "0",
  },
  span: {
    fontSize: "0.9rem",
    fontWeight: "bold",
  },
  a: {
    color: "#ccc",
    marginLeft: "4px",
    verticalAlign: "middle",
  },
  failMessage: {
    color: "white",
    margin: "0",
  },
  refreshButton: {
    border: "none",
    backgroundColor: "transparent",
    color: "lightcoral",
    fontSize: "1rem",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
};

function Quote({ classes }) {
  const quote = useSelector(selectQuote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  if (quote.loading) {
    return (
      <div className={classes.div}>
        <CircularProgress />
      </div>
    );
  } else if (quote.failedToLoad) {
    return (
      <div className={classes.div}>
        <p className={classes.failMessage}>
          Quote failed to load. Please{" "}
          <button
            className={classes.refreshButton}
            onClick={() => window.location.reload()}
          >
            refresh page
          </button>{" "}
          to try again.
        </p>
      </div>
    );
  } else {
    return (
      <div className={classes.div}>
        <p className={classes.text}>"{quote.text}"</p>
        <p className={classes.author}>
          {quote.author} |{" "}
          <span className={classes.span}>
            <img
              src="https://theysaidso.com/branding/theysaidso.png"
              height="20"
              width="20"
              alt="theysaidso.com"
            />
            <a
              href="https://theysaidso.com"
              title="Powered by quotes from theysaidso.com"
              className={classes.a}
            >
              They Said So®
            </a>
          </span>
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(Quote);

import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { selectQuote, fetchQuote } from "./quoteSlice";
import { useSelector, useDispatch } from "react-redux";

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
  },
  span: {
    zIndex: "50",
    fontSize: "0.9rem",
    fontWeight: "bold",
  },
  a: {
    color: "#ccc",
    marginLeft: "4px",
    verticalAlign: "middle",
  },
};

function Quote({ classes }) {
  const quote = useSelector(selectQuote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

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

export default withStyles(styles)(Quote);

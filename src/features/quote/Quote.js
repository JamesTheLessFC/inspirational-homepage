import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  div: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  text: {
    color: "white",
    fontStyle: "italic",
    fontSize: "1.5rem",
  },
  author: {
    color: "rgba(255, 255, 255, 0.7)",
  },
};

function Quote({ classes }) {
  const [quote, setQuote] = useState({
    text: "Luke, I am your father.",
    author: "Darth Vader",
  });

  return (
    <div className={classes.div}>
      <p className={classes.text}>{quote.text}</p>
      <p className={classes.author}>{quote.author}</p>
    </div>
  );
}

export default withStyles(styles)(Quote);

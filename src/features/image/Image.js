import React, { useState } from "react";
import Weather from "../weather/Weather";
import GoalsContainer from "../goalsContainer/GoalsContainer";
import Quote from "../quote/Quote";
import { IconButton } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { withStyles } from "@material-ui/core/styles";
import Time from "../time/Time";

import milford1 from "../../images/milford1.jpg";
import milford2 from "../../images/milford2.jpg";
import milford3 from "../../images/milford3.jpg";
import milford4 from "../../images/milford4.jpg";

const styles = {
  gridContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "no-wrap",
    justifyContent: "space-between",
    boxSizing: "border-box",
    backgroundSize: "cover",
  },
  prevButton: {
    position: "absolute",
    top: "50vh",
    left: "0",
    color: "white",
  },
  nextButton: {
    position: "absolute",
    top: "50vh",
    right: "0",
    color: "white",
  },
  timeWeatherContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

function Image({ classes }) {
  const [images, setImages] = useState([
    milford1,
    milford2,
    milford3,
    milford4,
  ]);
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrevClick = () => {
    setImageIndex((prevImageIndex) => {
      if (prevImageIndex === 0) {
        return images.length - 1;
      } else {
        return prevImageIndex - 1;
      }
    });
  };

  const handleNextClick = () => {
    setImageIndex((prevImageIndex) => {
      if (prevImageIndex === images.length - 1) {
        return 0;
      } else {
        return prevImageIndex + 1;
      }
    });
  };

  return (
    <div
      container
      className={classes.gridContainer}
      style={{ backgroundImage: `url(${images[imageIndex]})` }}
    >
      <IconButton onClick={handlePrevClick} className={classes.prevButton}>
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton onClick={handleNextClick} className={classes.nextButton}>
        <NavigateNextIcon />
      </IconButton>
      <div className={classes.timeWeatherContainer}>
        <Time />
        <Weather />
      </div>
      <GoalsContainer />
      <Quote />
    </div>
  );
}

export default withStyles(styles)(Image);

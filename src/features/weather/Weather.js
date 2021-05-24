import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import icon01d from "../../images/01d@2x.png";
import icon01n from "../../images/01n@2x.png";
import icon02d from "../../images/02d@2x.png";
import icon02n from "../../images/02n@2x.png";
import icon03d from "../../images/03d@2x.png";
import icon03n from "../../images/03n@2x.png";
import icon04d from "../../images/04d@2x.png";
import icon04n from "../../images/04n@2x.png";
import icon09d from "../../images/09d@2x.png";
import icon09n from "../../images/09n@2x.png";
import icon10d from "../../images/10d@2x.png";
import icon10n from "../../images/10n@2x.png";
import icon11d from "../../images/11d@2x.png";
import icon11n from "../../images/11n@2x.png";
import icon13d from "../../images/13d@2x.png";
import icon13n from "../../images/13n@2x.png";
import icon50d from "../../images/50d@2x.png";
import icon50n from "../../images/50n@2x.png";

const weatherIcons = {
  icon01d,
  icon01n,
  icon02d,
  icon02n,
  icon03d,
  icon03n,
  icon04d,
  icon04n,
  icon09d,
  icon09n,
  icon10d,
  icon10n,
  icon11d,
  icon11n,
  icon13d,
  icon13n,
  icon50d,
  icon50n,
};

const styles = {
  gridContainer: {
    marginRight: "1rem",
    width: "auto",
  },
  temperature: {
    color: "white",
    marginBottom: "0",
    textAlign: "left",
  },
  description: {
    color: "white",
    textAlign: "left",
    marginTop: ".5rem",
  },
  icon: {
    height: "100px",
  },
};

function Weather({ classes }) {
  const [weather, setWeather] = useState({
    temperature: "73.45",
    icon: weatherIcons.icon01d,
    description: "clear sky",
  });

  return (
    <Grid container className={classes.gridContainer}>
      <img className={classes.icon} src={weather.icon} alt="weather icon" />
      <div>
        <h1 className={classes.temperature}>{weather.temperature}&deg;</h1>
        <p className={classes.description}>{weather.description}</p>
      </div>
    </Grid>
  );
}

export default withStyles(styles)(Weather);

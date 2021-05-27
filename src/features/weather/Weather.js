import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import {
  selectWeather,
  fetchCurrentWeather,
  setLocation,
} from "./weatherSlice";

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
  div: {
    width: "auto",
    display: "flex",
    marginRight: "1rem",
    flexWrap: "no-wrap",
    alignItems: "center",
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
    height: "50px",
    width: "50px",
    backgroundPosition: "center",
    marginRight: "1rem",
  },
};

function Weather({ classes }) {
  const weather = useSelector(selectWeather);
  const dispatch = useDispatch();
  const matches = useMediaQuery("(max-width:400px)");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        );
      },
      (error) => {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }, [dispatch]);

  useEffect(() => {
    if (weather.latitude && weather.longitude) {
      dispatch(
        fetchCurrentWeather({
          latitude: weather.latitude,
          longitude: weather.longitude,
        })
      );
    }
  }, [dispatch, weather.longitude, weather.latitude]);

  const weatherIcon = weatherIcons[`icon${weather.icon}`];

  return (
    <div className={classes.div}>
      <div
        className={classes.icon}
        style={{ backgroundImage: `url(${weatherIcon})` }}
      ></div>
      <div>
        <h1
          className={classes.temperature}
          style={{ fontSize: matches ? "1.6rem" : "" }}
        >
          {weather.temperature}&deg;
        </h1>
        <p className={classes.description}>{weather.description}</p>
      </div>
    </div>
  );
}

export default withStyles(styles)(Weather);

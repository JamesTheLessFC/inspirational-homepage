import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  selectWeather,
  fetchCurrentWeather,
  setLocation,
} from "./weatherSlice";
import { CircularProgress } from "@material-ui/core";

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
  weatherContainer: {
    display: "flex",
    marginRight: "1rem",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  temperature: {
    color: "white",
    marginBottom: "0",
    textAlign: "right",
    marginTop: "0",
  },
  description: {
    color: "white",
    textAlign: "right",
    marginTop: ".5rem",
    marginBottom: "0",
    textTransform: "uppercase",
  },
  icon: {
    height: "50px",
    minWidth: "100px",
    backgroundPosition: "center",
  },
  failMessage: {
    color: "white",
    margin: "0",
    border: "1px solid white",
    borderRadius: "5px",
    padding: ".5rem",
    backgroundColor: "rgba(0,0,0,0.5)",
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

function Weather({ classes }) {
  const weather = useSelector(selectWeather);
  const dispatch = useDispatch();

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

  if (weather.loading) {
    return (
      <div className={classes.weatherContainer}>
        <CircularProgress />
      </div>
    );
  } else if (weather.failedToLoad) {
    return (
      <div className={classes.weatherContainer}>
        <p className={classes.failMessage}>
          Weather data failed to load. Please{" "}
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
      <div className={classes.weatherContainer}>
        <div
          className={classes.icon}
          style={{ backgroundImage: `url(${weatherIcon})` }}
        ></div>
        <div className={classes.tempDescriptionContainer}>
          <h1 className={classes.temperature}>{weather.temperature}&deg;</h1>
          <p className={classes.description}>{weather.description}</p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Weather);

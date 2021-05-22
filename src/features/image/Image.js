import React, { useState } from "react";
import Weather from "../weather/Weather";
import GoalsContainer from "../goalsContainer/GoalsContainer";
import Quote from "../quote/Quote";
import milford1 from "../../images/milford1.jpg";
import milford2 from "../../images/milford2.jpg";
import milford3 from "../../images/milford3.jpg";
import milford4 from "../../images/milford4.jpg";

export default function Image() {
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
      style={{ backgroundImage: `url(${images[imageIndex]})`, height: "100vh" }}
    >
      <button onClick={handlePrevClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
      <Weather />
      <GoalsContainer />
      <Quote />
    </div>
  );
}

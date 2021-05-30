const axios = require("axios");

exports.handler = async () => {
  const access_key = process.env.REACT_APP_UNSPLASH_API_KEY;
  const API_URL = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=5&query=nature`;

  const response = await axios.get(API_URL);
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(response.data.map((image) => image.urls.regular)),
  };
};

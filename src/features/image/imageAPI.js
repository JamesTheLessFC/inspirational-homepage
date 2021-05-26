import axios from "axios";

const access_key = process.env.REACT_APP_UNSPLASH_API_KEY;
const API_URL = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=4`;

export const fetchImages = async () => {
  const response = await axios.get(API_URL);
  return response.data.map((image) => image.urls.regular);
};

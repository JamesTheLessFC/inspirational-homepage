import axios from "axios";

export const fetchImages = async () => {
  const response = await axios.get("/.netlify/functions/fetchImages");
  return response.data;
};

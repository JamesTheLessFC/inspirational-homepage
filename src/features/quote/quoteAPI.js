import axios from "axios";

const API_URL = "https://quotes.rest/qod?category=inspire";

export const fetchQuoteOfTheDay = async () => {
  const response = await axios.get(API_URL);
  return {
    text: response.data.contents.quotes[0].quote,
    author: response.data.contents.quotes[0].author,
  };
};

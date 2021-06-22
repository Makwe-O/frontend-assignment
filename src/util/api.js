import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";

export const sendRequest = (endpoint, queryParams) => {
  try {
    return axios({
      url: `${baseUrl}${endpoint}`,
      method: "GET",
      params: {
        api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
        ...queryParams,
      },

      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

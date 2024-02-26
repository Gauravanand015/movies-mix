const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";

export const fetchDataFromAPI = async (url, params) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
        params,
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

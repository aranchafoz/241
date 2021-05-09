import axios, { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

export function usePopularMovies() {
  return useQuery("popular-movies", async () => {
    const requestOptions: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
      },
    };

    const url = `${process.env.REACT_APP_MOVIE_DB_API_URI}/movie/popular`;

    const { data } = await axios.get(url, requestOptions);
    return data;
  });
}

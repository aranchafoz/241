import axios, { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

export function usePopularSeries() {
  return useQuery("popular-series", async () => {
    const requestOptions: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
      },
    };

    const url = `${process.env.REACT_APP_MOVIE_DB_API_URI}/tv/popular`;

    const { data } = await axios.get(url, requestOptions);
    return data;
  });
}

export function useSerieDetails(id: number, options?: { skip?: boolean; }) {
  return useQuery(`serie-${id}`, async () => {
    const requestOptions: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
      },
    };

    const url = `${process.env.REACT_APP_MOVIE_DB_API_URI}/tv/${id}`;

    const { data } = await axios.get(url, requestOptions);
    return data;
  }, { enabled: !options?.skip });
}

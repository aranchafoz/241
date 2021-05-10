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

export function useFamilyMovies() {
  return useQuery("family-movies", async () => {
    const requestOptions: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
      },
    };

    const url = `${process.env.REACT_APP_MOVIE_DB_API_URI}/discover/movie?with_genres=10751`;

    const { data } = await axios.get(url, requestOptions);
    return data;
  });
}

export function useDocumentaryMovies() {
  return useQuery("documentary-movies", async () => {
    const requestOptions: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
      },
    };

    const url = `${process.env.REACT_APP_MOVIE_DB_API_URI}/discover/movie?with_genres=99`;

    const { data } = await axios.get(url, requestOptions);
    return data;
  });
}

export function useMovieDetails(id: number, options?: { skip?: boolean; }) {
  return useQuery(`movie-${id}`, async () => {
    const requestOptions: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
      },
    };

    const url = `${process.env.REACT_APP_MOVIE_DB_API_URI}/movie/${id}`;

    const { data } = await axios.get(url, requestOptions);
    return data;
  }, { enabled: !options?.skip });
}

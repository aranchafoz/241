import { UseQueryResult } from "react-query";
import ImageCarousel from "../../../components/image-carousel/image-carousel";
import { IMovie } from "../../../types/movie-types";
import { MovieRowListContainer } from "./movie-row-list.styled";
import { useHistory } from 'react-router';

interface IMovieQueryResult {
  results: IMovie[];
}

interface IProps {
  title: string;
  queryResult: UseQueryResult<IMovieQueryResult>;
  type: 'movie' | 'serie';
}

const MovieRowList: React.FC<IProps> = ({ title, queryResult, type }) => {
  const history = useHistory();

  return (
    <MovieRowListContainer>
      <h4 className="section-title">{title}</h4>
      {queryResult.status === "loading" ? (
          "Loading..."
        ) : queryResult.status === "error" ? (
          <span>Error: {queryResult.error}</span>
        ) : (  
          <ImageCarousel
            titleKey={type === 'movie' ? 'title' : 'name'}
            data={queryResult.data?.results ?? []}
            onClick={(id) => {
              history.push(`${type}/${id}`);
            }}
          />
        )
      }
    </MovieRowListContainer>
  );
};

export default MovieRowList;

import { UseQueryResult } from "react-query";
import ImageCarousel from "../../../components/image-carousel/image-carousel";
import { IMovie } from "../../../types/movie-types";
import { MovieRowListContainer } from "./movie-row-list.styled";

interface IMovieQueryResult {
  results: IMovie[];
}

interface IProps {
  title: string;
  queryResult: UseQueryResult<IMovieQueryResult>;
  titleKey?: 'title' | 'name';
}

const MovieRowList: React.FC<IProps> = ({ title, queryResult, titleKey }) => {
  return (
    <MovieRowListContainer>
      <h4 className="section-title">{title}</h4>
      {queryResult.status === "loading" ? (
          "Loading..."
        ) : queryResult.status === "error" ? (
          <span>Error: {queryResult.error}</span>
        ) : (  
          <ImageCarousel
            {...{ titleKey }}
            data={queryResult.data?.results ?? []}
            onClick={(id) => console.log('id: ', id)}
          />
        )
      }
    </MovieRowListContainer>
  );
};

export default MovieRowList;

import { IMovie } from "../../types/movie-types";
import { ImageCarouselContainer } from "./image-carousel.styled";

interface IProps {
  titleKey?: 'title' | 'name';
  data: IMovie[];
  onClick: (id: number) => void;
}

const ImageCarousel: React.FC<IProps> = ({ titleKey, data, onClick }) => {
  return (
    <ImageCarouselContainer>
      {data.map((item, key) => (
        <div
          {...{ key }}
          className="card"
          onClick={() => onClick(item.id)}
        >
          <img
            src={`${process.env.REACT_APP_IMAGE_BASE_URI}/w300${item.poster_path}`}
            alt={titleKey ? item[titleKey] : item.title}
          />
          <p className="title">{titleKey ? item[titleKey] : item.title}</p>
        </div>
      ))}
    </ImageCarouselContainer>
  );
};

export default ImageCarousel;

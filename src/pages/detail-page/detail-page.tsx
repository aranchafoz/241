import { useMovieDetails } from "../../services/movies";
import { DetailPageContainer } from "./detail-page.styled";
import { useHistory, useParams } from 'react-router';
import { useSerieDetails } from "../../services/series";
import { useMemo } from "react";
import { useModal } from "../../hooks/use-modal";
import VideoPlayerModal from "./video-player-modal/video-player-modal";

interface IParams {
  id: string;
}

interface IProps {
  type: 'movie' | 'serie';
}

const DetailPage: React.FC<IProps> = ({ type }) => {
  const { id } = useParams<IParams>();
  const history = useHistory();

  const videoPlayerModal = useModal();

  const movieDetails = useMovieDetails(parseInt(id), { skip: type !== 'movie' });
  const serieDetails = useSerieDetails(parseInt(id), { skip: type !== 'serie' });


  const { status, data, error } = useMemo(() => {
    if (type === 'movie' && movieDetails.status !== 'idle') return movieDetails;
    return serieDetails;
  }, [movieDetails, serieDetails, type])

  return (
    <DetailPageContainer>
      {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error}</span>
        ) : (  
          <>
            <h1>{type === 'movie' ? data.title : data.name}</h1>
            <div className="section-left">
              <p className="description">{data.overview}</p>
              <ul className="metadata">
                <li>Popularity: {data.popularity}</li>
                <li>Rating: {data.vote_average} / 10 ({data.vote_count})</li>
              </ul>
              <div className="buttons">
                <button
                  className="btn go-back"
                  onClick={() => history.goBack()}
                >
                  Go back
                </button>

                <button
                  className="btn play"
                  onClick={() => videoPlayerModal.setModalOpen(true)}
                >
                  Play trailer
                </button>
              </div>
            </div>
            <div className="section-right">
              <img
                src={`${process.env.REACT_APP_IMAGE_BASE_URI}/w780${data.poster_path}`}
                alt={type === 'movie' ? data.title : data.name}
              />
            </div>

            {videoPlayerModal.isOpen && (
              <VideoPlayerModal
                isActive={videoPlayerModal.isOpen}
                onClose={() => videoPlayerModal.setModalOpen(false)}
              />
            )}
          </>
        )
      }
    </DetailPageContainer>
  );
};

export default DetailPage;

import { DashboardContainer } from './dashboard.styled';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import ImageCarousel from '../../components/image-carousel/image-carousel';
import { useQuery, useQueryClient } from 'react-query';
import { usePopularMovies } from '../../services/movies';

const Dashboard: React.FC = () => {
  // Access the client
  const queryClient = useQueryClient()
  
  // Queries ({ status, data, error, isFetching })
  const popularMovies = usePopularMovies();


  useEffect(() => {
    // poster_path -> image
    // title
    console.log('popularMovies: ', popularMovies)
  }, [popularMovies])

  return (
    <DashboardContainer>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <h4>Popular movies</h4>
      {popularMovies.status === "loading" ? (
          "Loading..."
        ) : popularMovies.status === "error" ? (
          <span>Error: {popularMovies.error}</span>
        ) : (  
          <ImageCarousel />
        )}
      <h4>Popular series</h4>
      <h4>Family</h4>
      <h4>Documentary</h4>
    </DashboardContainer>
  );
};

export default Dashboard;

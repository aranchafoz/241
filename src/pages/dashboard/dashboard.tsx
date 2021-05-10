import { DashboardContainer } from './dashboard.styled';
import { Helmet } from 'react-helmet';
import { usePopularMovies, useFamilyMovies, useDocumentaryMovies } from '../../services/movies';
import MovieRowList from './movie-row-list/movie-row-list';
import { usePopularSeries } from '../../services/series';

const Dashboard: React.FC = () => {
  
  // Query results -> ({ status, data, error, isFetching })
  const popularMovies = usePopularMovies();
  const popularSeries = usePopularSeries();
  const familyMovies = useFamilyMovies();
  const documentaryMovies = useDocumentaryMovies();

  return (
    <DashboardContainer>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <MovieRowList
        type="movie"
        title="Popular movies"
        queryResult={popularMovies}
      />

      <MovieRowList
        type="serie"
        title="Popular series"
        queryResult={popularSeries}
      />

      <MovieRowList
        type="movie"
        title="Family"
        queryResult={familyMovies}
      />

      <MovieRowList
        type="movie"
        title="Documentary"
        queryResult={documentaryMovies}
      />
    </DashboardContainer>
  );
};

export default Dashboard;

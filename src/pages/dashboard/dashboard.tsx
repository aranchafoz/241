import { DashboardContainer } from './dashboard.styled';
import { Helmet } from 'react-helmet';
import { usePopularMovies, usePopularSeries, useFamilyMovies, useDocumentaryMovies } from '../../services/movies';
import MovieRowList from './movie-row-list/movie-row-list';

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
        title="Popular movies"
        queryResult={popularMovies}
      />

      <MovieRowList
        title="Popular series"
        queryResult={popularSeries}
        titleKey="name"
      />

      <MovieRowList
        title="Family"
        queryResult={familyMovies}
      />

      <MovieRowList
        title="Documentary"
        queryResult={documentaryMovies}
      />
    </DashboardContainer>
  );
};

export default Dashboard;

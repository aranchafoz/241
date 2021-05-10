import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard/dashboard';
import DetailPage from '../pages/detail-page/detail-page';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/movie/:id" render={() => <DetailPage type="movie" />}/>
      <Route exact path="/serie/:id" render={() => <DetailPage type="serie" />}/>

      <Route component={Dashboard} />
    </Switch>
  );
};

export default Routes;

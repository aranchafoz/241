import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard/dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Dashboard} />
    </Switch>
  );
};

export default Routes;

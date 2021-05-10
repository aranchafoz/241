import Routes from './routes/routes';
import { Helmet } from 'react-helmet';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { AppContainer } from './App.styled';

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <AppContainer>
      {/* Provide the client to the App */}
      <QueryClientProvider client={queryClient}>

        {/* Manage page title */}
        <Helmet
          titleTemplate="%s - Movie Browser"
          defaultTitle="Movie Browser"
        />

        <h2 id="app-name">Movie Browser</h2>

        {/* Manage app routes */}
        <Routes />
      </QueryClientProvider>
    </AppContainer>
  );
}

export default App;

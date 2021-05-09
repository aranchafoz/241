import Routes from './routes/routes';
import { Helmet } from 'react-helmet';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <div>
      {/* Provide the client to the App */}
      <QueryClientProvider client={queryClient}>

        {/* Manage page title */}
        <Helmet
          titleTemplate="%s - Movie Browser"
          defaultTitle="Movie Browser"
        />

        {/* Manage app routes */}
        <Routes />
      </QueryClientProvider>
    </div>
  );
}

export default App;

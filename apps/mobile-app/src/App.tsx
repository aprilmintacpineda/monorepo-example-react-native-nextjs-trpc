import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { Platform } from 'react-native';
import Config from 'react-native-config';
import Hello from 'src/components/Hello';
import { trpc } from './utils/trpc';

function getBaseUrl () {
  if (Config.HOSTNAME)
    // for live
    return `http://${Config.HOSTNAME}`;

  // assume localhost
  return Platform.OS === 'android'
    ? 'http://10.0.2.2:3000'
    : 'http://localhost:3000';
}

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
      // optional
      headers () {
        return {
          // @todo put authorization here
          authorization: ''
        };
      }
    })
  ]
});

const queryClient = new QueryClient();

const App: React.FunctionComponent = () => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Hello />
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import Hello from 'src/components/Hello';
import { trpc } from './utils/trpc';

function getBaseUrl () {
  // if (process.env.HOSTNAME)
  //   // for live
  //   return `http://${process.env.HOSTNAME}`;

  // // assume localhost
  // return `http://localhost:${process.env.PORT ?? 3000}`;
  return 'http://localhost:3000';
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

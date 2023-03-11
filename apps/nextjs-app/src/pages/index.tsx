import { trpc } from 'src/utils/trpc';

export default function Home () {
  const result = trpc.hello.useQuery(
    { name: 'april' },
    {
      retry: false
    }
  );

  console.log(result);

  if (result.status === 'loading') return <p>Loading</p>;

  if (result.status === 'error')
    return <code>{JSON.stringify(result.error)}</code>;

  return <p>{result.data.greeting}</p>;
}

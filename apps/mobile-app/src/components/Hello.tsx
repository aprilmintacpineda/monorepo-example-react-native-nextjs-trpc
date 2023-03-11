import { SafeAreaView, Text } from 'react-native';
import { trpc } from 'src/utils/trpc';

const Hello: React.FunctionComponent = () => {
  const result = trpc.hello.useQuery({ name: 'April' });

  if (result.status === 'loading') {
    return (
      <SafeAreaView>
        <Text>Loading</Text>
      </SafeAreaView>
    );
  }

  if (result.status === 'error') {
    return (
      <SafeAreaView>
        <Text>Error</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text>{result.data.greeting}</Text>
    </SafeAreaView>
  );
};

export default Hello;

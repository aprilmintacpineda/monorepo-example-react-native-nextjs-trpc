import { trpc } from '../utils/trpc';

trpc.hello.useQuery({ name: 'test' });

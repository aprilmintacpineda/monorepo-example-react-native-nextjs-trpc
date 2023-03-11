import type { AppRouter } from '@my-app/shared/trpc/appRouter';
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>();

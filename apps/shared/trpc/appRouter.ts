import * as yup from 'yup';
import { procedure, router } from './index';

export const appRouter = router({
  hello: procedure
    .input(
      yup.object({
        name: yup.string().required()
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.name}`
      };
    })
});

// export type definition of API
export type AppRouter = typeof appRouter;

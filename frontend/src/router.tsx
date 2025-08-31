import { createRouter as createTanstackRouter } from '@tanstack/solid-router';
import { DefaultError } from 'components/DefaultError/DefaultError';
import { NotFound } from 'components/NotFound/NotFound';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

export const createRouter = () => {
  const router = createTanstackRouter({
    routeTree,
    scrollRestoration: true,
    defaultNotFoundComponent: () => <NotFound />,
    defaultErrorComponent: () => <DefaultError />,
    defaultSsr: false,
    // context: {
    //   auth: undefined,
    // },
  });
  return router;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = createRouter();

// Register the router instance for type safety
declare module '@tanstack/solid-router' {
  interface Register {
    router: typeof router;
  }
}

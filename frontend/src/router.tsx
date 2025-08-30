import { createRouter as createTanstackRouter } from '@tanstack/solid-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

export const createRouter = () => {
  const router = createTanstackRouter({
    routeTree,
    scrollRestoration: true,
  });
  return router;
};

const router = createRouter();

// Register the router instance for type safety
declare module '@tanstack/solid-router' {
  interface Register {
    router: typeof router;
  }
}

import { createRootRouteWithContext, Outlet } from '@tanstack/solid-router';
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools';
import type { AuthState } from 'types/auth';

interface MyRouterContext {
  // The ReturnType of your useAuth hook or the value of your AuthContext
  auth: AuthState | undefined;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    lang: 'en',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Solid Frontend',
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      {/* <TanStackQueryProvider> */}

      <Outlet />
      <TanStackRouterDevtools />
      {/* </TanStackQueryProvider> */}
    </>
  );
}

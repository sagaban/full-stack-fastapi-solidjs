import '../index.css';

import { createRootRouteWithContext, Outlet } from '@tanstack/solid-router';
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools';
import { ThemeProvider } from 'contexts/ThemeContext';
// import type { AuthState } from 'types/auth';
// import TanStackQueryProvider from "../integrations/tanstack-query/provider.tsx";

// interface MyRouterContext {
//   // The ReturnType of your useAuth hook or the value of your AuthContext
//   auth: AuthState | undefined;
// }

// export const Route = createRootRouteWithContext<MyRouterContext>()({
export const Route = createRootRouteWithContext()({
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
    <ThemeProvider>
      {/* <TanStackQueryProvider> */}

      <Outlet />
      <TanStackRouterDevtools />
      {/* </TanStackQueryProvider> */}
    </ThemeProvider>
  );
}

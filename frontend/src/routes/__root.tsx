import { createRootRouteWithContext, Outlet } from '@tanstack/solid-router';
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools';
import { ThemeProvider } from 'contexts/ThemeContext';
import '../index.css';
// import TanStackQueryProvider from "../integrations/tanstack-query/provider.tsx";

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

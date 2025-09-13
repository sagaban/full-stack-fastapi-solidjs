import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { SolidQueryDevtools } from '@tanstack/solid-query-devtools';
import { RouterProvider } from '@tanstack/solid-router';
import { AppToaster } from 'components/AppToaster/AppToaster';

import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { router } from './router';

function InnerApp() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}

export default function App() {
  const queryClient = new QueryClient();
  return (
    <AuthProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <SolidQueryDevtools initialIsOpen={false} />
          <InnerApp />
          <AppToaster />
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

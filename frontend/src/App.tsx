import { RouterProvider } from '@tanstack/solid-router';

import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { router } from './router';

function InnerApp() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <InnerApp />
      </ThemeProvider>
    </AuthProvider>
  );
}

import { createFileRoute, Outlet, redirect } from '@tanstack/solid-router';
import { AuthLayout } from 'components/AppLayout/AppLayout';

export const Route = createFileRoute('/app')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth?.isAuthenticated) {
      throw redirect({
        to: '/auth/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}

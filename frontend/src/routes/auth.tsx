import { createFileRoute, Outlet } from '@tanstack/solid-router';
import { AuthLayout } from 'features/auth/components/AuthLayout/AuthLayout';

export const Route = createFileRoute('/auth')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}

import { createFileRoute } from '@tanstack/solid-router';
import { LoginPage } from 'features/auth/components/LoginPage/LoginPage';

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
});

function RouteComponent() {
  return <LoginPage />;
}

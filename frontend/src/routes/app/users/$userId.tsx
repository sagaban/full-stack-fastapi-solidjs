import { createFileRoute } from '@tanstack/solid-router';
import { UserDetailsPage } from 'features/users/components/UserDetailsPage/UserDetailsPage';

export const Route = createFileRoute('/app/users/$userId')({
  component: RouteComponent,
});

function RouteComponent() {
  return <UserDetailsPage />;
}

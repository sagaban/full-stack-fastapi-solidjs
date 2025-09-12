import { createFileRoute } from '@tanstack/solid-router';
import { UsersPage } from 'features/users/components/UsersPage/UsersPage';

export const Route = createFileRoute('/app/users/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <UsersPage />;
}

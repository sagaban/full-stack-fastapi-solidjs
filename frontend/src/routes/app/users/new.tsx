import { createFileRoute } from '@tanstack/solid-router';
import { AddUsersPage } from 'features/users/components/AddUsersPage/AddUsersPage';

export const Route = createFileRoute('/app/users/new')({
  component: RouteComponent,
});

function RouteComponent() {
  return <AddUsersPage />;
}

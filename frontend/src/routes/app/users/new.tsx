import { createFileRoute } from '@tanstack/solid-router';
import { AddUserPage } from 'features/users/components/AddUserPage/AddUserPage';

export const Route = createFileRoute('/app/users/new')({
  component: RouteComponent,
});

function RouteComponent() {
  return <AddUserPage />;
}

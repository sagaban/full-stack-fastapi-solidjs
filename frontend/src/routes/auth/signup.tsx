import { createFileRoute } from '@tanstack/solid-router';
import { SignupPage } from 'features/auth/components/SignupPage/SignupPage';

export const Route = createFileRoute('/auth/signup')({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignupPage />;
}

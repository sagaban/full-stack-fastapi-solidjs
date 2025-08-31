import { createFileRoute, redirect } from '@tanstack/solid-router';

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
});

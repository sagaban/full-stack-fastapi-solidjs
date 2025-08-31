import { createFileRoute, redirect } from '@tanstack/solid-router';
import { IndexPage } from 'components/IndexPage/IndexPage';

export const Route = createFileRoute('/')({
  beforeLoad: ({ context }) => {
    if (context.auth?.isAuthenticated) {
      throw redirect({
        to: '/app',
      });
    }
  },
  component: IndexPage,
});

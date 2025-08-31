import { createFileRoute } from '@tanstack/solid-router';
import { AppIndexPage } from 'components/AppIndexPage/AppIndexPage';

export const Route = createFileRoute('/app/')({
  component: AppIndexPage,
});

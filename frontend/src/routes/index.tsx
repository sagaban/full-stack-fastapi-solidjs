import { createFileRoute } from '@tanstack/solid-router';
import { IndexPage } from 'components/IndexPage/IndexPage';

export const Route = createFileRoute('/')({
  component: IndexPage,
});

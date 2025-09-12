import { useParams } from '@tanstack/solid-router';
import { PageContainer } from 'components/ui/page-container';

export const UserDetailsPage = () => {
  const params = useParams({ strict: false });

  return <PageContainer>UserDetails {params().userId} </PageContainer>;
};

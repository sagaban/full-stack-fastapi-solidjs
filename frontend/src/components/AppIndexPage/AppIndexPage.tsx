import { Heading } from 'components/ui/heading';
import { PageContainer } from 'components/ui/page-container';

import { AppHeader } from './AppHeader';

export const AppIndexPage = () => {
  return (
    <PageContainer>
      <AppHeader />
      <Heading size="xl" as="h1">
        Your application is ready!
      </Heading>
    </PageContainer>
  );
};

import { Heading } from 'components/ui/heading';
import { PageContainer } from 'components/ui/page-container';

export const AppIndexPage = () => {
  return (
    <PageContainer>
      <Heading size="xl" as="h1">
        Your application is ready!
      </Heading>
    </PageContainer>
  );
};

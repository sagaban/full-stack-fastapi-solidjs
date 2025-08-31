import { Heading } from 'ui/heading';
import { PageContainer } from 'ui/page-container';

import { IndexHeader } from './IndexHeader';

export const IndexPage = () => {
  return (
    <PageContainer>
      <IndexHeader />
      <Heading size="xl" as="h1">
        Hello World
      </Heading>
    </PageContainer>
  );
};

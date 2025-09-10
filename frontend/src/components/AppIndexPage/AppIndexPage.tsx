import { Heading } from 'components/ui/heading';
import { PageContainer } from 'components/ui/page-container';
import { Box } from 'styled-system/jsx';

export const AppIndexPage = () => {
  return (
    <PageContainer fullWidth>
      <Heading size="xl" as="h1">
        Your application is ready!
      </Heading>
      <Box h="1500px">lalaalalalala</Box>
    </PageContainer>
  );
};

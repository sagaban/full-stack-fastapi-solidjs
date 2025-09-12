import { Link } from '@tanstack/solid-router';
import { Heading } from 'components/ui/heading';
import { PageContainer } from 'components/ui/page-container';
import { Box } from 'styled-system/jsx';

export const UsersPage = () => {
  return (
    <PageContainer>
      <Heading as="h1">Users</Heading>
      <Box borderBottom="1px solid" borderBottomColor="border.default" />
      <Link to="/app/users/new">Add User</Link>
      <Box borderBottom="1px solid" borderBottomColor="border.default" />
      <Link to="/app/users/$userId" params={{ userId: '1' }}>
        User 1
      </Link>
    </PageContainer>
  );
};

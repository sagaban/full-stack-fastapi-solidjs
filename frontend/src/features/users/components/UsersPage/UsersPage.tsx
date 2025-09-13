import { useQuery } from '@tanstack/solid-query';
import { Link } from '@tanstack/solid-router';
import { MyTable } from 'components/MyTable/MyTable';
import { Button } from 'components/ui/button';
import { Heading } from 'components/ui/heading';
import { PageContainer } from 'components/ui/page-container';
import { Spinner } from 'components/ui/spinner';
import { Match, Switch } from 'solid-js';
import { apiService } from 'src/services/api/api';
import { Flex } from 'styled-system/jsx';

export const UsersPage = () => {
  const query = useQuery(() => ({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await apiService.GET('/api/v1/users/');
      return res.data;
    },
  }));

  const columns = [
    {
      header: 'Email',
      accessorKey: 'email',
    },
    {
      header: 'Name',
      accessorKey: 'full_name',
    },
    {
      header: 'Is Active',
      accessorKey: 'is_active',
    },
    {
      header: 'Is Superuser',
      accessorKey: 'is_superuser',
    },
  ];

  return (
    <PageContainer>
      <Flex alignItems="center" justifyContent="space-between" mb="4">
        <Heading as="h1" size="lg">
          Users
        </Heading>
        <Link to="/app/users/new">
          <Button>Add User</Button>
        </Link>
      </Flex>
      <Switch>
        <Match when={query.isPending}>
          <Spinner />
        </Match>
        <Match when={query.isError}>
          <p>Error: {query.error?.message}</p>
        </Match>
        <Match when={query.isSuccess && query.data}>
          <MyTable data={query.data?.data ?? []} columns={columns} />
        </Match>
      </Switch>
    </PageContainer>
  );
};

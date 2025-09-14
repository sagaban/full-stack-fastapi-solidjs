import { useQuery } from '@tanstack/solid-query';
import { Link } from '@tanstack/solid-router';
import type { ColumnDef } from '@tanstack/solid-table';
import { MyTable } from 'components/MyTable/MyTable';
import { Button } from 'components/ui/button';
import { Heading } from 'components/ui/heading';
import { PageContainer } from 'components/ui/page-container';
import { Spinner } from 'components/ui/spinner';
import { CheckIcon } from 'lucide-solid';
import { Match, Show, Switch } from 'solid-js';
import { apiService } from 'src/services/api/api';
import type { components } from 'src/services/api/types';
import { Flex } from 'styled-system/jsx';

export const UsersPage = () => {
  const query = useQuery(() => ({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await apiService.GET('/api/v1/users/');
      return res.data;
    },
  }));

  const columns: ColumnDef<components['schemas']['UserPublic']>[] = [
    {
      header: 'Email',
      accessorKey: 'email',
      size: 300,
    },
    {
      header: 'Name',
      accessorKey: 'full_name',
      meta: {
        width: 'max-content',
      },
    },
    {
      header: 'Is Active',
      accessorKey: 'is_active',
      meta: {
        alignHeader: 'max-content',
      },
      cell: (info) => {
        return (
          <Show when={info.getValue()}>
            <Flex justifyContent="center" gap="1">
              <CheckIcon color="green" />
            </Flex>
          </Show>
        );
      },
      size: 50,
    },
    {
      header: 'Is Superuser',
      accessorKey: 'is_superuser',
      cell: (info) => {
        return (
          <Show when={info.getValue()}>
            <Flex justifyContent="center" gap="1">
              <CheckIcon color="green" />
            </Flex>
          </Show>
        );
      },
      size: 50,
    },
  ];

  return (
    <PageContainer fullWidth>
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
          <MyTable data={query.data?.data ?? []} columns={columns} hiddenFooter />
        </Match>
      </Switch>
    </PageContainer>
  );
};

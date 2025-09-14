import { useQuery } from '@tanstack/solid-query';
import { useParams } from '@tanstack/solid-router';
import { MyAlert } from 'components/MyAlert/MyAlert';
import { Heading } from 'components/ui/heading';
import { PageContainer } from 'components/ui/page-container';
import { Spinner } from 'components/ui/spinner';
import { Text } from 'components/ui/text';
import { For, Show } from 'solid-js';
import { apiService } from 'src/services/api/api';
import { Grid, GridItem } from 'styled-system/jsx';

export const UserDetailsPage = () => {
  const params = useParams({ strict: false });
  const query = useQuery(() => ({
    queryKey: ['user', params().userId],
    queryFn: () =>
      apiService.GET('/api/v1/users/{user_id}', {
        params: {
          path: {
            user_id: params().userId as string,
          },
        },
      }),
  }));

  const keyLabel = [
    { email: 'Email' },
    { full_name: 'Full Name' },
    { is_active: 'Is Active' },
    { is_superuser: 'Is Superuser' },
  ] as const;

  return (
    <PageContainer>
      <Heading as="h1" variant="heading" mb="4" size="xl">
        User Details
      </Heading>
      <Show when={query.isLoading}>
        <Spinner />
      </Show>
      <Show when={query.isError}>
        <MyAlert title="Error" description={query.error?.message} />
      </Show>
      <Show when={query.isSuccess}>
        <Grid gridTemplateColumns="1fr 1fr" gap="4" w="md">
          <For each={keyLabel}>
            {(item) => {
              const key = Object.keys(item)[0];
              const label = item[key as keyof typeof item];
              let value = query.data?.data?.[key as keyof typeof query.data.data];
              value = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value;
              return (
                <>
                  <GridItem>
                    <Text fontWeight="bold" textAlign="right">
                      {label}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text textAlign="left">{value}</Text>
                  </GridItem>
                </>
              );
            }}
          </For>
        </Grid>
      </Show>
    </PageContainer>
  );
};

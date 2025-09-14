import { createForm } from '@tanstack/solid-form';
import { useMutation } from '@tanstack/solid-query';
import { useNavigate } from '@tanstack/solid-router';
import { MyField } from 'components/MyField/MyField';
import { Button } from 'components/ui/button';
import { Checkbox } from 'components/ui/checkbox';
import { Heading } from 'components/ui/heading';
import { PageContainer } from 'components/ui/page-container';
import { useToast } from 'src/hooks/useToast';
import { apiService } from 'src/services/api/api';
import type { components } from 'src/services/api/types';
import { Stack, styled } from 'styled-system/jsx';
import * as yup from 'yup';

export const AddUserPage = () => {
  const { errorToast } = useToast();
  const navigate = useNavigate();
  const mutation = useMutation(() => ({
    mutationFn: (newUser: components['schemas']['UserCreate']) => {
      return apiService.POST('/api/v1/users/', {
        body: newUser,
      });
    },
    onSuccess: () => {
      navigate({ to: '/app/users' });
    },
    onError: () => {
      errorToast({ title: 'Failed to create user' });
    },
  }));

  const form = createForm(() => ({
    defaultValues: {
      full_name: '',
      email: '',
      password: '',
      is_active: true,
      is_superuser: false,
    } satisfies components['schemas']['UserCreate'],
    onSubmit: async ({ value }) => {
      await mutation.mutateAsync(value);
    },
  }));
  return (
    <PageContainer>
      <Heading as="h1" size="2xl" mb="5">
        Add User
      </Heading>
      {/* <Show when={mutation.isError}>
        <Alert.Root onClose={() => mutation.reset()}>
          <Alert.Icon>
            <OctagonAlertIcon />
          </Alert.Icon>
          <Alert.Title>Error</Alert.Title>
          <Alert.Description>{mutation.error?.message}</Alert.Description>
        </Alert.Root>
      </Show> */}
      <styled.form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        novalidate
        maxWidth="md"
        mx="auto"
      >
        <Stack gap="2">
          <form.Field
            name="full_name"
            children={(field) => (
              <MyField
                invalid={field().state.meta.errors.length > 0}
                label="Full Name"
                placeholder="Full Name"
                name={field().name}
                value={field().state.value}
                onBlur={field().handleBlur}
                onInput={(e: InputEvent) =>
                  field().handleChange((e.target as HTMLInputElement).value)
                }
              />
            )}
          />
          <form.Field
            name="email"
            validators={{
              onChangeAsync: yup.string().required('Email is required').email('Invalid email'),
            }}
            children={(field) => (
              <MyField
                required
                type="email"
                label="Email"
                placeholder="Email"
                invalid={field().state.meta.errors.length > 0}
                helperText={
                  field().state.meta.errors.length > 0 ? field().state.meta.errors[0]?.message : ''
                }
                name={field().name}
                value={field().state.value}
                onBlur={field().handleBlur}
                onInput={(e: InputEvent) =>
                  field().handleChange((e.target as HTMLInputElement).value)
                }
              />
            )}
          />
          <form.Field
            name="password"
            validators={{
              onChangeAsync: yup
                .string()
                .required('Password is required')
                .min(8, 'Password must be at least 8 characters long'),
            }}
            children={(field) => (
              <MyField
                required
                type="password"
                label="Password"
                placeholder="Password"
                invalid={field().state.meta.errors.length > 0}
                helperText={
                  field().state.meta.errors.length > 0 ? field().state.meta.errors[0]?.message : ''
                }
                name={field().name}
                value={field().state.value}
                onBlur={field().handleBlur}
                onInput={(e: InputEvent) =>
                  field().handleChange((e.target as HTMLInputElement).value)
                }
              />
            )}
          />
          <form.Field
            name="is_superuser"
            children={(field) => (
              <Checkbox
                checked={field().state.value}
                onCheckedChange={(v) =>
                  field().handleChange(
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    v.checked as any,
                  )
                }
                mb="2"
              >
                Is Superuser?
              </Checkbox>
            )}
          />
          <Button type="submit" isLoading={mutation.isPending}>
            Add User
          </Button>
        </Stack>
      </styled.form>
    </PageContainer>
  );
};

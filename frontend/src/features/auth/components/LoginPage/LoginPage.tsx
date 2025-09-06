import { createForm } from '@tanstack/solid-form';
import { useNavigate } from '@tanstack/solid-router';
import { Button } from 'components/ui/button';
import { Field } from 'components/ui/field';
import { Heading } from 'components/ui/heading';
import { useAuth } from 'contexts/AuthContext';
import { Show } from 'solid-js';
import { useToast } from 'src/hooks/useToast';
import { Box, styled } from 'styled-system/jsx';
import * as yup from 'yup';

export const LoginPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { errorToast } = useToast();

  const handleLogin = async (username: string, password: string) => {
    try {
      await auth.login(username, password);
      navigate({ to: '/app' });
    } catch (error) {
      errorToast({
        title: 'Login Failed',
        description: error instanceof Error ? error.message : 'Try again later',
      });
    }
  };

  const form = createForm(() => ({
    defaultValues: {
      username: '',
      password: '',
    },
    onSubmit: ({ value }) => handleLogin(value.username, value.password),
  }));

  return (
    <div>
      <Heading size="2xl" as="h1" mb="5">
        Login
      </Heading>
      <styled.form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
        maxWidth="md"
        mx="auto"
      >
        <form.Field
          name="username"
          validators={{
            onChangeAsync: yup.string().required('Username is required'),
          }}
          children={(field) => (
            <Field.Root mb="2">
              <Field.Label>Username</Field.Label>
              <Field.Input
                placeholder="Username"
                name={field().name}
                value={field().state.value}
                onBlur={field().handleBlur}
                onInput={(e) => field().handleChange(e.target.value)}
              />
              <Show when={field().state.meta.errors.length > 0} fallback={<Box h="5" />}>
                <Field.HelperText color="fg.error">
                  {field().state.meta.errors[0]?.message}
                </Field.HelperText>
              </Show>
            </Field.Root>
          )}
        />
        <form.Field
          name="password"
          validators={{
            onChangeAsync: yup.string().required('Password is required'),
          }}
          children={(field) => (
            <Field.Root mb="4">
              <Field.Label>Password</Field.Label>
              <Field.Input
                placeholder="Password"
                name={field().name}
                value={field().state.value}
                onBlur={field().handleBlur}
                onInput={(e) => field().handleChange(e.target.value)}
                type="password"
              />
              <Show when={field().state.meta.errors.length > 0} fallback={<Box h="5" />}>
                <Field.HelperText color="fg.error">
                  {field().state.meta.errors[0]?.message}
                </Field.HelperText>
              </Show>
            </Field.Root>
          )}
        />
        <Button type="submit" display="block" w="full">
          Login
        </Button>
      </styled.form>
    </div>
  );
};

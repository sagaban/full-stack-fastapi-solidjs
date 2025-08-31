import { createForm } from '@tanstack/solid-form';
import { useNavigate } from '@tanstack/solid-router';
import { Button } from 'components/ui/button';
import { Field } from 'components/ui/field';
import { Heading } from 'components/ui/heading';
import { useAuth } from 'contexts/AuthContext';
import { Show } from 'solid-js';
import { Box, styled } from 'styled-system/jsx';
import * as yup from 'yup';

export const LoginPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const form = createForm(() => ({
    defaultValues: {
      username: '',
      password: '',
    },
    onSubmit: ({ value }) => {
      // Do something with form data
      console.log(value);
      auth.login(value.username);
      navigate({ to: '/app' });
    },
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

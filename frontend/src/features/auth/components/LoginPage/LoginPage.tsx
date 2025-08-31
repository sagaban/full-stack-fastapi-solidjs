import { createForm } from '@tanstack/solid-form';
import { Button } from 'components/ui/button';
import { Heading } from 'components/ui/heading';
import { Field } from 'components/ui/field';
import { Box, styled } from 'styled-system/jsx';
import { z } from 'zod';
import { Show } from 'solid-js';

export const LoginPage = () => {
  const form = createForm(() => ({
    defaultValues: {
      username: '',
      password: '',
    },
    onSubmit: ({ value }) => {
      // Do something with form data
      console.log(value);
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
            onChange: z.string().min(1, 'Username is required'),
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
            onChange: z.string().min(1, 'Password is required'),
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

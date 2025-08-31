import { Link } from '@tanstack/solid-router';
import { useAuth } from 'contexts/AuthContext';
import { Show } from 'solid-js';
import { Box } from 'styled-system/jsx';
import { Button } from 'ui/button';
import { Text } from 'ui/text';

import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export const IndexHeader = () => {
  const auth = useAuth();
  // const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    // navigate({ to: '/auth/login' });
  };
  return (
    <Box
      h="3.5rem"
      w="100%"
      px="4"
      py="1"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      borderBottom="1px solid"
      borderBottomColor="border.default"
      bg="bg.default"
    >
      <Text size="lg">Solid + FastAPI</Text>
      <Box ml="auto" display="flex" alignItems="center" gap="2">
        <Show when={auth.user}>
          <Text size="lg">{auth.user}</Text>
          <ThemeToggle />
          <Button onClick={handleLogout}>Logout</Button>
        </Show>
        <Show when={!auth.user}>
          <ThemeToggle />
          <Button as={Link} href="/auth/login">
            Login
          </Button>
          <Button as={Link} href="/auth/signup">
            Signup
          </Button>
        </Show>
      </Box>
    </Box>
  );
};

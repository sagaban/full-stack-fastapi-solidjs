import { useNavigate } from '@tanstack/solid-router';
import { IconButton } from 'components/ui/icon-button';
import { useAuth } from 'contexts/AuthContext';
import { PanelLeftCloseIcon, PanelLeftOpenIcon } from 'lucide-solid';
import { type Setter, Show } from 'solid-js';
import { Box } from 'styled-system/jsx';
import { Button } from 'ui/button';
import { Text } from 'ui/text';

import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { APP_DRAWER_WIDTH_CLOSED, APP_DRAWER_WIDTH_OPEN } from './constants';

export const AppHeader = (props: { isDrawerOpen: boolean; setIsDrawerOpen: Setter<boolean> }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate({ to: '/' });
  };

  const width = () =>
    props.isDrawerOpen
      ? `calc(100% - ${APP_DRAWER_WIDTH_OPEN} + 1px)`
      : `calc(100% - ${APP_DRAWER_WIDTH_CLOSED} + 1px)`;

  const left = () =>
    `calc(${props.isDrawerOpen ? APP_DRAWER_WIDTH_OPEN : APP_DRAWER_WIDTH_CLOSED} + -1px)`;

  return (
    <Box
      h="3.5rem"
      w="var(--header-width)"
      px="4"
      py="1"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      top="0"
      left="var(--header-left)"
      right="0"
      zIndex="1000"
      borderBottom="1px solid"
      borderBottomColor="border.default"
      bg="bg.default"
      transition="all 0.3s ease-in-out"
      style={{
        '--header-width': width(),
        '--header-left': left(),
      }}
    >
      <IconButton onClick={() => props.setIsDrawerOpen((prev) => !prev)} variant="outline">
        <Show when={props.isDrawerOpen} fallback={<PanelLeftOpenIcon />}>
          <PanelLeftCloseIcon />
        </Show>
      </IconButton>
      <Box ml="auto" display="flex" alignItems="center" gap="2">
        <Text size="lg">{auth.user?.full_name ?? auth.user?.email}</Text>
        <ThemeToggle />
        <Button onClick={handleLogout}>Logout</Button>
      </Box>
    </Box>
  );
};

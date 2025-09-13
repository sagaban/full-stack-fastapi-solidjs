import { type JSXElement } from 'solid-js';
import { Box } from 'styled-system/jsx';
import { createStoredSignal } from 'utils/signalStorage';

import { AppDrawer } from './AppDrawer';
import { AppHeader } from './AppHeader';
import { APP_DRAWER_WIDTH_CLOSED, APP_DRAWER_WIDTH_OPEN } from './constants';

export const AuthLayout = (props: { children: JSXElement }) => {
  const [isDrawerOpen, setIsDrawerOpen] = createStoredSignal('isDrawerOpen', false);
  return (
    <Box display="flex" width="100%">
      <AppHeader isDrawerOpen={isDrawerOpen()} setIsDrawerOpen={setIsDrawerOpen} />
      <AppDrawer isDrawerOpen={isDrawerOpen()} />

      <Box
        width="var(--layout-width)"
        flexGrow={1}
        p="4"
        right="0"
        position="absolute"
        transition="all 0.3s ease-in-out"
        style={{
          '--layout-width': isDrawerOpen()
            ? `calc(100% - ${APP_DRAWER_WIDTH_OPEN})`
            : `calc(100% - ${APP_DRAWER_WIDTH_CLOSED})`,
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

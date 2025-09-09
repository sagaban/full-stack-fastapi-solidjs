import { createSignal, type JSXElement } from 'solid-js';
import { Box } from 'styled-system/jsx';

import { AppDrawer } from './AppDrawer';
import { AppHeader } from './AppHeader';
import { APP_DRAWER_WIDTH_CLOSED, APP_DRAWER_WIDTH_OPEN } from './constants';

export const AuthLayout = (props: { children: JSXElement }) => {
  const [isDrawerOpen, setIsDrawerOpen] = createSignal(false);
  return (
    <Box display="flex" width="100%">
      <AppHeader isDrawerOpen={isDrawerOpen()} />
      <AppDrawer isDrawerOpen={isDrawerOpen()} setIsDrawerOpen={setIsDrawerOpen} />

      <Box
        width={
          isDrawerOpen()
            ? `calc(100% - ${APP_DRAWER_WIDTH_OPEN})`
            : `calc(100% - ${APP_DRAWER_WIDTH_CLOSED})`
        }
        flexGrow={1}
        p="4"
      >
        {props.children}
      </Box>
    </Box>
  );
};

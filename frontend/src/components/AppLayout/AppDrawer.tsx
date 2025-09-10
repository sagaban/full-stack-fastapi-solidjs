import { Box } from 'styled-system/jsx';

import { APP_DRAWER_WIDTH_CLOSED, APP_DRAWER_WIDTH_OPEN } from './constants';

export const AppDrawer = (props: { isDrawerOpen: boolean }) => {
  const width = () => (props.isDrawerOpen ? APP_DRAWER_WIDTH_OPEN : APP_DRAWER_WIDTH_CLOSED);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      minHeight="100vh"
      background="bg.default"
      boxShadow="lg"
      display="flex"
      transition="width 0.3s ease-in-out"
      width="var(--drawer-width)"
      style={{
        '--drawer-width': width(),
      }}
    >
      Cosas
    </Box>
  );
};

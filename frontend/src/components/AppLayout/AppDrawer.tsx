import { Button } from 'components/ui/button';
import { type Setter } from 'solid-js';
import { Box } from 'styled-system/jsx';

import { APP_DRAWER_WIDTH_CLOSED, APP_DRAWER_WIDTH_OPEN } from './constants';

export const AppDrawer = (props: { isDrawerOpen: boolean; setIsDrawerOpen: Setter<boolean> }) => {
  const width = () => (props.isDrawerOpen ? APP_DRAWER_WIDTH_OPEN : APP_DRAWER_WIDTH_CLOSED);

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      height="100vh"
      background="bg.default"
      boxShadow="lg"
      display="flex"
      transition="all 0.3s ease-in-out"
      width="var(--drawer-width)"
      style={{
        '--drawer-width': width(),
      }}
    >
      <Button onClick={() => props.setIsDrawerOpen((prev) => !prev)}>
        {props.isDrawerOpen ? 'Close' : 'Open'}
      </Button>
    </Box>
  );
};

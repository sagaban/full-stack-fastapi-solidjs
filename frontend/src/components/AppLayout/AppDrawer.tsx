import { LeftSideMenu } from 'components/LeftSideMenu/LeftSideMenu';
import { Stack } from 'styled-system/jsx';

import { APP_DRAWER_WIDTH_CLOSED, APP_DRAWER_WIDTH_OPEN } from './constants';

export const AppDrawer = (props: { isDrawerOpen: boolean }) => {
  const width = () => (props.isDrawerOpen ? APP_DRAWER_WIDTH_OPEN : APP_DRAWER_WIDTH_CLOSED);

  return (
    <Stack
      position="fixed"
      top="0"
      left="0"
      minHeight="100vh"
      height="100%"
      background="bg.default"
      boxShadow="lg"
      transition="width 0.3s ease-in-out"
      zIndex="1000"
      width="var(--drawer-width)"
      style={{
        '--drawer-width': width(),
      }}
    >
      <LeftSideMenu isDrawerOpen={props.isDrawerOpen} />
    </Stack>
  );
};

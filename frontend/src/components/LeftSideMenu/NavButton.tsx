import { Link, useLocation } from '@tanstack/solid-router';
import { DefaultTooltip } from 'components/DefaultTooltip/DefaultTooltip';
import { IconButton } from 'components/ui/icon-button';
import { Text } from 'components/ui/text';
import { type JSX, Show } from 'solid-js';
import { Flex } from 'styled-system/jsx';

export const NavButton = (props: {
  title: string;
  icon: JSX.Element;
  to: string;
  isDrawerOpen: boolean;
}) => {
  const location = useLocation();
  const isActive = () => location().pathname === props.to;

  return (
    <Link to={props.to}>
      <Flex gap="2" alignItems="center" w="100%" cursor="pointer">
        <DefaultTooltip
          content={props.title}
          openDelay={0}
          closeDelay={0}
          disabled={props.isDrawerOpen}
          positioning={{
            placement: 'right',
          }}
        >
          <IconButton size="sm" variant={isActive() ? 'solid' : 'subtle'}>
            {props.icon}
          </IconButton>
        </DefaultTooltip>
        <Show when={props.isDrawerOpen}>
          <Text size="sm" overflow="hidden" whiteSpace="nowrap">
            {props.title}
          </Text>
        </Show>
      </Flex>
    </Link>
  );
};

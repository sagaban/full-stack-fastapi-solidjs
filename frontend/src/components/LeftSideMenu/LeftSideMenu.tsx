import { Link } from '@tanstack/solid-router';
import { Heading } from 'components/ui/heading';
import { UsersIcon } from 'lucide-solid';
import { Show } from 'solid-js';
import { Flex, Stack, styled } from 'styled-system/jsx';

import { NavButton } from './NavButton';
import { SectionTitle } from './SectionTitle';

export const LeftSideMenu = (props: { isDrawerOpen: boolean }) => {
  return (
    <Stack>
      <Link to="/app">
        <Flex alignItems="center" justifyContent="center" gap="1" cursor="pointer">
          <styled.img src="/img/logo.svg" alt="logo" h="50px" w="50px" />
          <Show when={props.isDrawerOpen}>
            <Heading overflow="hidden" whiteSpace="nowrap">
              Solid + FastAPI
            </Heading>
          </Show>
        </Flex>
      </Link>
      <Stack p="2">
        <SectionTitle title="Administration" />
        <NavButton
          title="Users"
          icon={<UsersIcon />}
          to="/app/users"
          isDrawerOpen={props.isDrawerOpen}
        />
      </Stack>
    </Stack>
  );
};

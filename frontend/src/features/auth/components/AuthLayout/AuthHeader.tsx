import { Link } from '@tanstack/solid-router';
import { Box } from 'styled-system/jsx';
import { Button } from 'ui/button';
import { ThemeToggle } from '../../../../components/ThemeToggle/ThemeToggle';

export const AuthHeader = () => {
  return (
    <Box
      h='3.5rem'
      w='100%'
      px='4'
      py='2'
      position='fixed'
      top='0'
      left='0'
      right='0'
      zIndex='100'
      borderBottom='1px solid'
      borderBottomColor='border.default'
      bg='bg.default'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
    >
      <Button as={Link} href='/'>
        Go back to home
      </Button>
      <ThemeToggle />
    </Box>
  );
};

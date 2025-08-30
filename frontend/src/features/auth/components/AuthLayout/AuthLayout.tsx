import { PageContainer } from 'components/ui/page-container';
import type { JSXElement } from 'solid-js';
import { AuthHeader } from './AuthHeader';

export const AuthLayout = ({ children }: { children: JSXElement }) => {
  return (
    <div>
      <AuthHeader />
      <PageContainer>{children}</PageContainer>
    </div>
  );
};

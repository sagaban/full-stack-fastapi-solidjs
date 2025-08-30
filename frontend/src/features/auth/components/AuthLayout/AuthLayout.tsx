import { PageContainer } from 'components/ui/page-container';
import { AuthHeader } from './AuthHeader';
import type { JSXElement } from 'solid-js';
export const AuthLayout = ({ children }: { children: JSXElement }) => {
  return (
    <div>
      <AuthHeader />
      <PageContainer>
        {children}
      </PageContainer>
    </div>
  );
};

import { PageContainer } from 'components/ui/page-container';
import type { JSXElement } from 'solid-js';
import { AuthHeader } from './AuthHeader';
// import { children } from "solid-js/types/server/reactive.js";

export const AuthLayout = (props: { children: JSXElement }) => {
  // const safeChildren = children(() => props.children);

  return (
    <div>
      <AuthHeader />
      <PageContainer>{props.children}</PageContainer>
    </div>
  );
};

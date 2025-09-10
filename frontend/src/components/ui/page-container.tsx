/* eslint-disable solid/reactivity */
import type { JSXElement } from 'solid-js';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
import type { CssProperties, LiteralUnion } from 'styled-system/types';

const styles = css({
  bg: 'bg.default/20',
  p: '12px 16px',
  m: '0 auto',
  backdropFilter: 'blur(15px)',
});

export const PageContainer = (props: {
  maxWidth?: LiteralUnion<CssProperties['maxWidth']>;
  fullWidth?: boolean;
  children: JSXElement;
}) => {
  const maxWidth = props.fullWidth ? '100%' : (props.maxWidth ?? '4xl');
  const mt = props.fullWidth ? '0' : '12px';
  const minHeight = props.fullWidth ? 'calc(100vh - rem)' : 'calc(100vh - 5rem)';

  return (
    <styled.div class={styles} maxWidth={maxWidth} mt={mt} minHeight={minHeight}>
      {props.children}
    </styled.div>
  );
};

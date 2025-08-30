import type { JSXElement } from 'solid-js';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
import type { CssProperties, LiteralUnion } from 'styled-system/types';

const styles = css({
  bg: 'backgroundPrimary',
  p: '10px 15px',
  m: '0 auto',
});

export const PageContainer = (props: {
  maxWidth?: LiteralUnion<CssProperties['maxWidth']>;
  children: JSXElement;
}) => {
  return (
    <styled.div class={styles} maxWidth={props.maxWidth ?? '3xl'}>
      {props.children}
    </styled.div>
  );
};

import { Tooltip } from 'components/ui/tooltip';
import { type JSX } from 'solid-js';

export const DefaultTooltip = (
  props: { children: JSX.Element; content: string } & Tooltip.RootProps,
) => (
  <Tooltip.Root {...props}>
    <Tooltip.Trigger>{props.children}</Tooltip.Trigger>
    <Tooltip.Positioner>
      <Tooltip.Arrow>
        <Tooltip.ArrowTip />
      </Tooltip.Arrow>
      <Tooltip.Content>{props.content}</Tooltip.Content>
    </Tooltip.Positioner>
  </Tooltip.Root>
);

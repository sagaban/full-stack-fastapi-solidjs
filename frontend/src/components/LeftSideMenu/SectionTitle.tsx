import { Heading } from 'components/ui/heading';

export const SectionTitle = (props: { title: string }) => {
  return (
    <Heading size="sm" color="fg.muted" overflow="hidden" whiteSpace="nowrap">
      {props.title}
    </Heading>
  );
};

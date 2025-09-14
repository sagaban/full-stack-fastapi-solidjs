import { Alert } from 'components/ui/alert';
import { type LucideProps, OctagonAlertIcon } from 'lucide-solid';
import type { JSX } from 'solid-js';

export const MyAlert = (
  props: Alert.RootProps & {
    title: string;
    description?: string;
    IconElement?: (props: LucideProps) => JSX.Element;
  },
) => {
  return (
    <Alert.Root {...props}>
      <Alert.Icon
        asChild={(iconProps) =>
          props.IconElement ? (
            <props.IconElement {...iconProps()} />
          ) : (
            <OctagonAlertIcon {...iconProps()} />
          )
        }
      />
      <Alert.Title>{props.title}</Alert.Title>
      <Alert.Description>{props.description}</Alert.Description>
    </Alert.Root>
  );
};

import { Field } from 'components/ui/field';
import { Show, splitProps } from 'solid-js';
import { Box } from 'styled-system/jsx';

export const MyField = (
  props: Field.RootProps & {
    value: Field.InputProps['value'];
    label?: string;
    name?: Field.InputProps['name'];
    placeholder?: Field.InputProps['placeholder'];
    helperText?: string;
    type?: Field.InputProps['type'];
    onInput: Field.InputProps['onInput'];
    onBlur?: Field.InputProps['onBlur'];
  },
) => {
  const [local, fieldProps] = splitProps(props, [
    'value',
    'label',
    'name',
    'placeholder',
    'helperText',
    'onBlur',
    'onInput',
    'type',
  ]);

  const required = () => {
    if (fieldProps.required) {
      return ' *';
    }
    return '';
  };

  const helperTextColor = () => {
    if (fieldProps.invalid) {
      return 'fg.error';
    }
    return 'fg.muted';
  };

  return (
    <Field.Root {...fieldProps}>
      <Show when={local.label}>
        <Field.Label>
          {local.label}
          {required()}
        </Field.Label>
      </Show>
      <Field.Input
        name={local.name}
        placeholder={local.placeholder}
        value={local.value}
        onBlur={local.onBlur}
        onInput={local.onInput}
        type={local.type}
      />
      <Show when={local.helperText} fallback={<Box h="5" />}>
        <Field.HelperText color={helperTextColor()}>{local.helperText}</Field.HelperText>
      </Show>
    </Field.Root>
  );
};

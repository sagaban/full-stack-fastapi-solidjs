import { Button } from 'components/ui/button';
import { Dialog } from 'components/ui/dialog';
import { IconButton } from 'components/ui/icon-button';
import { XIcon } from 'lucide-solid';
import { Show } from 'solid-js';
import { useConfirmDialog } from 'src/hooks/useConfirmDialog';
import { Stack } from 'styled-system/jsx';

export const AppConfirmDialog = () => {
  const { rootProps, setOpen, confirmDialogState } = useConfirmDialog();

  return (
    <Dialog.Root
      open={confirmDialogState().open}
      onOpenChange={(details) => setOpen(details.open)}
      {...rootProps}
    >
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Stack gap="8" p="6">
            <Stack gap="1">
              <Dialog.Title>{confirmDialogState().title}</Dialog.Title>
              <Show when={confirmDialogState().description}>
                <Dialog.Description>{confirmDialogState().description}</Dialog.Description>
              </Show>
            </Stack>
            <Stack gap="3" direction="row" width="full" justify="end">
              <Dialog.CloseTrigger
                asChild={(closeTriggerProps) => (
                  <Button {...closeTriggerProps()} variant="outline">
                    Cancel
                  </Button>
                )}
              />
              <Button
                onClick={() => {
                  setOpen(false);
                  confirmDialogState().onConfirm?.();
                }}
              >
                Confirm
              </Button>
            </Stack>
          </Stack>
          <Dialog.CloseTrigger
            asChild={(closeTriggerProps) => (
              <IconButton
                {...closeTriggerProps()}
                aria-label="Close Dialog"
                variant="ghost"
                size="sm"
                position="absolute"
                top="2"
                right="2"
              >
                <XIcon />
              </IconButton>
            )}
          />
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

import { IconButton } from 'components/ui/icon-button';
import { Toast } from 'components/ui/toast';
import { XIcon } from 'lucide-solid';
import { errorToaster } from 'src/hooks/useToast';

export const AppToaster = () => {
  return (
    <Toast.Toaster toaster={errorToaster}>
      {(toast) => (
        <Toast.Root>
          <Toast.Title>{toast().title}</Toast.Title>
          <Toast.Description>{toast().description}</Toast.Description>

          <Toast.CloseTrigger
            asChild={(closeProps) => (
              <IconButton {...closeProps()} size="sm" variant="link">
                <XIcon />
              </IconButton>
            )}
          />
        </Toast.Root>
      )}
    </Toast.Toaster>
  );
};

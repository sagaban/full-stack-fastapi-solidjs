import { Toast } from 'components/ui/toast';

export const toaster = Toast.createToaster({
  placement: 'top-end',
  overlap: true,
  gap: 16,
});

export const useToast = () => {

  const genericToast = ({ title, description, type }: { title: string; description?: string; type: 'error' | 'success' | 'warning' | 'info' }) => {
    toaster.create({
      title,
      description,
      type,
    });
  };


  const errorToast = (args: { title: string; description?: string }) => genericToast({ ...args, type: 'error' });

  const successToast = (args: { title: string; description?: string }) => genericToast({ ...args, type: 'success' });


  return {
    errorToast,
    successToast
  };
};

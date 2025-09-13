import { Toast } from 'components/ui/toast';

export const errorToaster = Toast.createToaster({
  placement: 'top-end',
  overlap: true,
  gap: 16,
});

export const useToast = () => {
  const errorToast = ({ title, description }: { title: string; description?: string }) => {
    errorToaster.create({
      title,
      description,
      type: 'error',
    });
  };

  return {
    errorToast,
  };
};

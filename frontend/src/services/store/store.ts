import { Store } from '@tanstack/solid-store';

// You can instantiate the store outside of Solid components too!
export const store = new Store<{
  confirmDialog: {
    open: boolean;
    title: string;
    description?: string;
    onConfirm?: () => void;
  };
}>({
  confirmDialog: {
    open: false,
    title: '',
  },
})
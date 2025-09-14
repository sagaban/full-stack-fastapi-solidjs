import type { Dialog } from "@ark-ui/solid";
import { useStore } from "@tanstack/solid-store";
import { store } from "src/services/store/store";

export const useConfirmDialog = (
  rootProps?: Dialog.RootProps,
) => {
  const confirmDialogState = useStore(store, (state) => state.confirmDialog);

  const confirmDialog = ({ title, description, onConfirm }: { title: string; description?: string; onConfirm: () => void }) => {
    store.setState((state) => {
      return {
        ...state,
        confirmDialog: {
          ...state.confirmDialog,
          title,
          description,
          open: true,
          onConfirm,
        },
      }
    })
  };
  const setOpen = (open: boolean) => {
    store.setState((state) => {
      return {
        ...state,
        confirmDialog: { ...state.confirmDialog, open },
      }
    })
  }
  return {
    confirmDialog,
    rootProps,
    setOpen,
    confirmDialogState,
  };
};
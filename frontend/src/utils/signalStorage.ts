import { createSignal, type Setter, type Signal } from "solid-js";

export const createStoredSignal = <T>(
  key: string,
  defaultValue: T,
  storage = localStorage
): Signal<T> => {

  const initialValue = storage.getItem(key)
    ? JSON.parse(storage.getItem(key) as string) as T
    : defaultValue;

  const [value, setValue] = createSignal<T>(initialValue);


  const setValueAndStore: Setter<T> = (...args) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const v = setValue(...args as any);
    storage.setItem(key, JSON.stringify(v));
    return v;
  };

  return [value, setValueAndStore];
};
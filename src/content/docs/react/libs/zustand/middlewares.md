---
title: Middlewares
---

## The Persist Middleware

The Persist Middleware enables us to store our Zustand state in a storage (e.g. localStorage, IndexedDB, etc), thus persisting its data.

### Local Storage

Persist takes a `stateCreatorFn` and `persistOptions`. One of the options is `name`, which is a unique name of the item for our store in the storage.

```ts
interface PersonState {
  firstName: string;
  setFirstName: (value: string) => void;
}

export const usePersonStore = create<PersonState>()(
  persist((set) => ({
    firstName: "",
    setFirstName: (value: string) => set((state) => ({ firstName: value })),
  })),
  { name: "person-storage" },
);
```

#### This is the result in the local storage:

| Key            | Value                             |
| -------------- | --------------------------------- |
| person-storage | {"state": {"firstName":"Marlon"}} |

### Session Storage

Persist also receives an optional `storage` parameter, which is used to read and write the persisted state. Defaults to `createJSONStorage(() => localStorage)`.

```ts
const customSessionStorage: StateStorage = {
  getItem: (name: string): string | Promise<string | null> | null => {
    return window.sessionStorage.getItem(name);
  },
  setItem: (name: string, value: string): void | Promise<void> => {
    window.sessionStorage.setItem(name, value);
  },
  removeItem: (name: string): void | Promise<void> => {
    window.sessionStorage.removeItem(name);
  },
};

export const usePersonStore = create<PersonState & Actions>()(
  persist(storeApi, {
    name: "person-storage",
    storage: createJSONStorage(() => customSessionStorage),
  }),
);
```

:::note
`createJSONStorage` is a convenience helper suited for quick prototyping. It uses `JSON.parse`/`JSON.stringify` without runtime validation. In production scenarios, we should implement a custom`PersistStorage` using a schema validation library like Zod.
:::

## Redux

TO BE IMPLEMENTED

## Logger

TO BE IMPLEMENTED

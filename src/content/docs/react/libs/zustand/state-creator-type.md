---
title: The State Creator Type
---

### The StateCreator Type

`StateCreator<T>` is the type behind the function we pass to `create`. Instead of inlining the store logic directly inside `create<T>()((set) => ({...}))`, we can declare it separately with an explicit `StateCreator` type. This is especially handy when composing middlewares like `persist`, since we get the store logic typed and defined on its own, then just pass it into the middleware.

```ts
import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface PersonState {
  firstName: string;
  setFirstName: (name: string) => void;
}

const storeApi: StateCreator<PersonState> = (set) => ({
  firstName: "",
  setFirstName: (value: string) =>
    set({
      firstName: value,
    }),
});

export const usePersonStore = create<PersonState>()(
  persist(storeApi, { name: "person-storage" }),
);
```

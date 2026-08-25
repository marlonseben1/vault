---
title: Provider Patter
---

The Provider pattern centralizes shared data in a `Context` and exposes it to a subtree through a single provider, avoiding prop drilling across intermediate components that don't need the data themselves.

### Context and guarded hook

Call `createContext` with `undefined` as the default, then wrap `useContext` in a custom hook that throws when it's used outside a provider. This turns a silent `undefined` into an explicit error at the call site instead of a runtime crash deep in a component.

```ts
// context/userContext.ts
import { createContext, useContext } from "react";
import type { User } from "../types/User.types";

export const UserContext = createContext<User | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(
      "useUserContext must be used within a UserContext Provider",
    );
  }

  return context;
};
```

### Provider

Only the component that owns the data needs to know about the context.

```tsx
// Provider.tsx
function Provider() {
  const [user] = useState<User>({ nome: "Marlon", idadeEmAnos: 22 });

  return (
    <UserContext value={user}>
      <Header />
      <Sidebar />
    </UserContext>
  );
}
```

:::note
Since React 19, we can render `<SomeContext>` as a provider.

In older versions, we must use `<SomeContext.Provider>`.
:::

### Consumer

Any descendant reads the value through the custom hook, no matter how deep it sits in the tree.

```tsx
// components/ConsumerOne.tsx
const ConsumerOne: FC = () => {
  const { nome } = useUserContext();
  return <div>Olá {nome}</div>;
};
```

```tsx
// components/ConsumerTwo.tsx
const ConsumerTwo: FC = () => {
  const { idadeEmAnos } = useUserContext();
  return <div>Você tem {idadeEmAnos} anos</div>;
};
```

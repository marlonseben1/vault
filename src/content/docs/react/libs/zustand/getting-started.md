---
title: Getting Started
sidebar:
  order: 2
---

Zustand is a small, fast and scalable state manager solution which has an API based on hooks. It isn't boilerplatey or opinionated, but has enough convention to be explicit and flux-like.

### Creating a Store

The store is a hook! We can put anything in it: primitives, objects, functions.
The `set` function _merges_ state.

```ts
import { create } from "zustand";

// Define types for state & actions
interface BearState {
  bears: number;
  increasePopulation: (by: number) => void;
}

// Create store using the curried form of `create`
export const useBearStore = create<BearState>()((set) => ({
  bears: 2,
  increasePopulation: (by: number) =>
    set((state) => ({ bears: state.bears + by })),
}));
```

### Binding our components

We can use the hook anywhere, without the need of providers. We just have to select the desired state and the consuming component will re-render when state changes.

```tsx
function BearComponent() {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);

  return (
    <div>
      <h1>{bears}</h1>
      <button onClick={increasePopulation}>Increase</button>
    </div>
  );
}
```

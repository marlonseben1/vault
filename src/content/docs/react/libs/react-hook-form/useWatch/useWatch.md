---
title: useWatch
---

Subscribe to input changes with isolated component re-renders.

### Props

| Name           | Type                            | Description                                                                                                                                                                                                                     |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`         | `string, string[] or undefined` | Name of the field. Reactive --- changing this prop dynamically will update the subscription to the new field name.                                                                                                              |
| `control`      | `Object`                        | `control` object provided by useForm. It's optional if we are using `FormProvider`.                                                                                                                                             |
| `compute`      | `function`                      | Subscribe to the entire form but only return updated value with certain conditions. Subscribe to a specific form value state.                                                                                                   |
| `defaultValue` | `unknown`                       | Fallback value returned before the form has mounted and no current value exists yet. Once the form is mounted, the actual current form value takes precedence over this fallback.                                               |
| `disabled`     | `boolean = false`               | Option to disable the subscription                                                                                                                                                                                              |
| `exact`        | `boolean = false`               | Enable exact name matching. When false (default), a subscription fires when the subscribed name is a prefix of the changed field name, or vice versa (for example, subscribing to "users" receives updates for "users.0.name"). |

:::note

- The only difference between `useWatch` and `watch` is at the root (`useForm`) level or the custom hook level.
- `useWatch`'s execution order matters, which means if you update a form value before the subscription is in place, then the updated value will be ignored
- `useWatch`'s result is optimized for the render phase instead of `useEffect` dependencies. To detect value updates, you may want to use an external custom hook for value comparison.

:::

### Example in Typescript

```tsx
import { useForm, useWatch } from "react-hook-form";

interface FormInputs {
  firstName: string;
  lastName: string;
}

function FirstNameWatched({ control }: { control: Control<FormInputs> }) {
  const firstName = useWatch({
    control,
    name: "firstName", // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
    defaultValue: "default", // default value before the render
  });

  return <p>Watch: {firstName}</p>; // only re-render at the custom hook level, when firstName changes
}

function App() {
  const { register, control, handleSubmit } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name:</label>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <button type="submit">Send</button>

      <FirstNameWatched control={control} />
    </form>
  );
}
```

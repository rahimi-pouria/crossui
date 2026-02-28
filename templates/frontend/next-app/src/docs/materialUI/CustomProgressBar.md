# CustomProgressBar – Material UI Version

## Description
The **CustomProgressBar** component is a reusable **progress bar** built with **Material-UI's `LinearProgress`**.  
It supports both **determinate** and **indeterminate** modes based on the `value` prop.

---

## Props

| Prop      | Type       | Default     | Description                                                      |
|-----------|-----------|------------|------------------------------------------------------------------|
| `value`   | `number`  | `undefined` | Progress value (0–100). If undefined, progress is indeterminate. |

---

## Features

✅ Supports **determinate** progress when `value` is provided.  
✅ Shows **indeterminate loading** when `value` is not provided.  
✅ Fully compatible with **Material-UI styling and theming**.

---

## Example Usage

```tsx
<CustomProgressBar value={50} />   // 50% complete

<CustomProgressBar />              // indeterminate loading

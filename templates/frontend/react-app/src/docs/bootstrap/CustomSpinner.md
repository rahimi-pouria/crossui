# CustomSpinner – React Bootstrap Version

## Description
The **CustomSpinner** component is a flexible and reusable wrapper around **React-Bootstrap’s `Spinner`**.  
It allows you to display a loading indicator with **custom animation**, **size**, **variant**, and optional **children elements**.

---

## Props

| Prop                  | Type                | Default   | Description                                                                                  |
|-----------------------|-------------------|-----------|----------------------------------------------------------------------------------------------|
| `idSpinner`           | `string`           | `''`      | HTML `id` for the spinner element.                                                          |
| `animationSpinner`    | `'border' | 'grow'` | `'border'` | Type of spinner animation.                                                                  |
| `roleSpinner`         | `string`           | `'status'` | ARIA role for accessibility.                                                                |
| `sizeSpinner`         | `'sm' | undefined` | `undefined` | Size of the spinner. (`sm` for small)                                                       |
| `variantSpinner`      | `string`           | `'primary'` | Bootstrap variant/color of the spinner.                                                    |
| `children`            | `React.ReactNode`  | `undefined` | Optional children inside the spinner, e.g., loading text.                                   |

---

## Features

✅ Supports **border** and **grow** animations.  
✅ Fully customizable **size** and **Bootstrap variant**.  
✅ Can include **optional children elements**, such as text.  
✅ Accessible with **ARIA roles**.  
✅ Lightweight and reusable across React-Bootstrap projects.

---

## Example Usage

```tsx
<CustomSpinner
    idSpinner="loading-main"
    animationSpinner="grow"
    sizeSpinner="sm"
    variantSpinner="success"
>
    Loading...
</CustomSpinner>

# CustomProgress Component

`CustomProgress` is a Vue 3 wrapper component built with [BootstrapVue Next](https://github.com/bootstrap-vue/bootstrap-vue-next).  
It wraps the native `BProgress` component and adds a title, custom styling, and reactive props.

---

## ✨ Features
- Displays a progress bar with optional title
- Supports Bootstrap variants for colors
- Animated and striped styles
- Customizable height and CSS classes
- Fully reactive via props

---

## 📦 Props

| Prop Name           | Type        | Required | Description                                                                                      |
|--------------------|------------|----------|------------------------------------------------------------------------------------------------|
| `titleProgress`     | `String`    | No       | Title text displayed above the progress bar.                                                   |
| `valueProgress`     | `Number`    | Yes      | Current value of the progress bar (0-100).                                                     |
| `variantProgress`   | `String`    | No       | Bootstrap variant color (e.g., `'primary'`, `'success'`, `'danger'`).                         |
| `animated`          | `Boolean`   | No       | Animates the progress bar when true.                                                           |
| `striped`           | `Boolean`   | No       | Shows a striped pattern on the progress bar.                                                  |
| `heightProgress`    | `String`    | No       | Sets the height of the progress bar (e.g., `'20px'`).                                         |
| `customClassProgress` | `String \| Array \| Object` | No | Custom CSS classes applied to the progress bar container.                                     |

---

## 🧩 Slots

> This component does not provide slots; all configuration is via props.

---

## 📘 Example Usage

```vue
<template>
  <CustomProgress
    titleProgress="Loading..."
    :valueProgress="60"
    variantProgress="success"
    animated
    striped
    heightProgress="25px"
    customClassProgress="my-progress"
  />
</template>

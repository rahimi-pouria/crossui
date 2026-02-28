# CustomSpinner Component

`CustomSpinner` is a Vue 3 wrapper component built with [BootstrapVue Next](https://github.com/bootstrap-vue/bootstrap-vue-next).  
It wraps the native `BSpinner` and provides full customization via props.

---

## ✨ Features
- Displays a Bootstrap spinner
- Supports different spinner types (`border` or `grow`)
- Configurable label for accessibility
- Custom variant colors
- Apply custom CSS classes

---

## 📦 Props

| Prop Name           | Type       | Required | Description                                                                                      |
|--------------------|-----------|----------|------------------------------------------------------------------------------------------------|
| `typeSpinner`       | `'border' \| 'grow'` | No       | Type of spinner to display (`border` or `grow`).                                               |
| `labelSpinner`      | `String`  | No       | ARIA label for the spinner, useful for accessibility.                                         |
| `variantSpinner`    | `String`  | No       | Bootstrap color variant (e.g., `'primary'`, `'success'`).                                     |
| `customSpinnerProps` | `String \| Array \| Object` | No | Custom CSS classes applied to the spinner.                                                    |

---

## 🧩 Slots

> This component does not provide slots; configuration is via props.

---

## 📘 Example Usage

```vue
<template>
  <CustomSpinner
    typeSpinner="grow"
    variantSpinner="primary"
    labelSpinner="Loading..."
    :customSpinnerProps="['my-spinner', 'spinner-lg']"
  />
</template>

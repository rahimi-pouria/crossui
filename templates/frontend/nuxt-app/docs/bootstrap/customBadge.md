# CustomBadge Component

`CustomBadge` is a Vue 3 wrapper component built with [BootstrapVue Next](https://github.com/bootstrap-vue/bootstrap-vue-next).  
It extends `BBadge` with TypeScript props and additional customization options for badges and dot indicators.

---

## ✨ Features
- Fully customizable Bootstrap badge
- Supports all Bootstrap color variants
- Optional dot indicator for notifications or status
- Custom classes for badge styling
- Simple usage with reactive title text

---

## 📦 Props

| Prop Name        | Type                               | Required | Description                                                                                      |
|-----------------|------------------------------------|----------|------------------------------------------------------------------------------------------------|
| `titleBadge`     | `String`                           | No       | Text displayed inside the badge.                                                               |
| `variantBadge`   | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'light' \| 'dark'` | No       | Bootstrap color variant for the badge.                                                        |
| `idBadge`        | `String`                           | No       | Optional HTML id for the badge element.                                                        |
| `customClassBadge` | `String \| Array \| Object`      | No       | Custom CSS classes for the badge container.                                                   |
| `dotIndicator`   | `Boolean`                          | No       | If true, renders a small dot indicator inside the badge, useful for notifications or status.  |

---

## 🧩 Slots

| Name | Description |
|------|-------------|
| *None currently* | Component does not use slots, but can be extended if needed |

---

## 📘 Example Usage

```vue
<template>
  <CustomBadge
    titleBadge="3"
    variantBadge="danger"
    idBadge="notificationBadge"
    customClassBadge="me-2"
    :dotIndicator="true"
  />
</template>

# CustomAvatarItem Component

`CustomAvatarItem` is a Vue 3 component built with [BootstrapVue Next](https://github.com/bootstrap-vue/bootstrap-vue-next).  
It combines `BAvatar` and `BListGroupItem` to create a reusable avatar list item for user lists, contacts, or profile previews.

---

## ✨ Features
- Fully customizable avatar list item with type-safe props
- Supports all Bootstrap avatar variants for color and size
- Optional badge for status or notifications
- Flexible rounded options for avatar
- Custom classes for avatar, title, and list item
- Suitable for user lists, chat participants, and team members

---

## 📦 Props

| Prop Name             | Type                                                                                     | Required | Description                                                                                      |
|-----------------------|------------------------------------------------------------------------------------------|----------|------------------------------------------------------------------------------------------------|
| `titleAvatar`         | `String`                                                                                 | No       | Text displayed next to the avatar.                                                             |
| `srcAvatar`           | `String`                                                                                 | No       | Avatar image source.                                                                            |
| `sizeAvatar`          | `String \| Number`                                                                        | No       | Size of the avatar (default: `"md"`).                                                          |
| `variantAvatar`       | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'light' \| 'dark'` | No       | Bootstrap color variant for the avatar.                                                       |
| `bgVariant`           | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'light' \| 'dark'` | No       | Background color variant.                                                                      |
| `textVariantAvatar`   | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'light' \| 'dark'` | No       | Text color inside avatar.                                                                      |
| `badgeAvatar`         | `String \| Number`                                                                        | No       | Badge value displayed on avatar.                                                              |
| `badgeVariantAvatar`  | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'light' \| 'dark'` | No       | Badge color variant.                                                                           |
| `roundedAvatar`       | `Boolean \| String`                                                                       | No       | Makes avatar rounded (default: `true`).                                                      |
| `roundedTopAvatar`    | `Boolean`                                                                                 | No       | Round top side of avatar (default: `false`).                                                 |
| `roundedBottomAvatar` | `Boolean`                                                                                 | No       | Round bottom side of avatar (default: `false`).                                              |
| `roundedStartAvatar`  | `Boolean`                                                                                 | No       | Round start side of avatar (default: `false`).                                               |
| `roundedEndAvatar`    | `Boolean`                                                                                 | No       | Round end side of avatar (default: `false`).                                                 |
| `customClassGroupItem`| `String \| Array \| Object`                                                               | No       | Custom classes for `BListGroupItem`.                                                         |
| `customClassAvatar`   | `String \| Array \| Object`                                                               | No       | Custom classes for `BAvatar`.                                                               |
| `customClassTitleAvatar` | `String \| Array \| Object`                                                           | No       | Custom classes for title text.                                                               |
| `idAvatar`            | `String`                                                                                 | No       | Optional HTML id for the avatar.                                                             |

---

## 🧩 Slots

| Name | Description |
|------|-------------|
| *None currently* | Component does not use slots, but can be extended if needed |

---

## 📘 Example Usage

```vue
<template>
  <CustomAvatarItem
    titleAvatar="John Doe"
    srcAvatar="/images/user.jpg"
    sizeAvatar="40"
    badgeAvatar="3"
    badgeVariantAvatar="danger"
    customClassGroupItem="d-flex align-items-center gap-2"
    customClassTitleAvatar="fw-semibold"
  />
</template>

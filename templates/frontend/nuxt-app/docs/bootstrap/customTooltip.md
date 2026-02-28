# CustomTooltip Component

`CustomTooltip` is a Vue 3 wrapper component built with [BootstrapVue Next](https://github.com/bootstrap-vue/bootstrap-vue-next).  
It wraps the native `BTooltip` and provides an easy way to show tooltips on any target element via slots.

---

## ✨ Features
- Easy tooltip integration using slots
- Custom text via `description` prop
- Works with any HTML or Vue element as target
- Fully reactive and lightweight
- Built on top of BootstrapVue Next `BTooltip`

---

## 📦 Props

| Prop Name     | Type    | Required | Description                                           |
|---------------|--------|----------|-------------------------------------------------------|
| `description` | String | Yes      | Text content displayed inside the tooltip.          |

---

## 🧩 Slots

| Name    | Description                                          |
|---------|------------------------------------------------------|
| `default` | Slot for the target element that triggers the tooltip |

---

## 📘 Example Usage

```vue
<template>
  <CustomTooltip description="This is a tooltip">
    <button class="btn btn-primary">Hover me</button>
  </CustomTooltip>
</template>

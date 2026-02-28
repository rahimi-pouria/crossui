# CustomCollapse Component

`CustomCollapse` is a Vue 3 wrapper component built using [BootstrapVue Next](https://github.com/bootstrap-vue/bootstrap-vue-next) and a custom `CustomButton`.  
It provides a collapsible panel with toggle button control and slot-based content.

---

## ✨ Features
- Toggle visibility of content using a button
- Integrates `CustomButton` for flexible button styling
- Supports `v-model` for reactive visibility
- Slot-based content or optional title text
- Fully customizable collapse container classes
- Accessible with `aria-controls` and `aria-expanded`

---

## 📦 Props

| Prop Name            | Type        | Required | Description                                                                                      |
|---------------------|------------|----------|------------------------------------------------------------------------------------------------|
| `labelBtn`           | `String`    | No       | Label displayed on the toggle button.                                                          |
| `idCollapse`         | `String`    | No       | HTML id for the collapse container.                                                            |
| `customClassCollapse`| `String \| Array \| Object` | No | Custom CSS classes for the collapse container.                                                |
| `titleCollapse`      | `String`    | No       | Optional title text displayed inside the collapse content.                                     |
| `visible`            | `Boolean`   | No       | Controls the visibility of the collapse panel (supports `v-model`).                           |

> **Button props inherited from `CustomButton`**  
> All props of `CustomButton` (label, btnClass, variantBtn, etc.) are available for customizing the toggle button.

---

## 🧩 Slots

| Name       | Description |
|------------|-------------|
| `content`  | Slot for custom content inside the collapse panel if `titleCollapse` is not provided. |

---

## 📘 Example Usage

```vue
<template>
  <CustomCollapse
    v-model="isOpen"
    labelBtn="Toggle Panel"
    idCollapse="panel1"
    customClassCollapse="my-collapse"
    titleCollapse="Panel Title"
  >
    <template #content>
      <p>This is the slot content for the collapsible panel.</p>
    </template>
  </CustomCollapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(true)
</script>

# CustomRadioButton Component

`CustomRadioButton` is a Vue 3 wrapper component built with [BootstrapVue Next](https://github.com/bootstrap-vue/bootstrap-vue-next).  
It extends the native `BFormRadio` with TypeScript props and supports two-way binding using `v-model`.

---

## ✨ Features
- Fully reactive radio button using `v-model`
- Supports custom value and title
- Integrates seamlessly with forms
- Emits `update:modelValue` when selection changes
- Lightweight and reusable

---

## 📦 Props

| Prop Name          | Type      | Required | Description                                                                                      |
|-------------------|-----------|----------|------------------------------------------------------------------------------------------------|
| `titleRadioButton` | `String`  | No       | Label text displayed next to the radio button.                                                 |
| `valueRadioButton` | `any`     | Yes      | Value assigned to this radio button.                                                          |
| `modelValue`       | `any`     | Yes      | Two-way bound value via `v-model`.                                                            |

---

## 🧩 Events

| Event               | Description                                           |
|--------------------|-------------------------------------------------------|
| `update:modelValue` | Emits the selected value whenever the radio changes. |

---

## 📘 Example Usage

```vue
<template>
  <CustomRadioButton
    v-model="selectedOption"
    valueRadioButton="option1"
    titleRadioButton="Option 1"
  />
  <CustomRadioButton
    v-model="selectedOption"
    valueRadioButton="option2"
    titleRadioButton="Option 2"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedOption = ref('option1')
</script>

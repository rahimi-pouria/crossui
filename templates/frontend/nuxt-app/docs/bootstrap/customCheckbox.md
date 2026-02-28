# CustomCheckbox Component

`CustomCheckbox` is a Vue 3 wrapper component built with [BootstrapVue Next](https://github.com/bootstrap-vue/bootstrap-vue-next).  
It extends `BFormCheckbox` with TypeScript props and reactive `v-model` support for two-way binding.

---

## ✨ Features
- Fully reactive checkbox using `v-model`
- Supports custom values for checked and unchecked states
- Customizable HTML id
- Simple integration with forms
- Emits `update:modelValue` event when the value changes

---

## 📦 Props

| Prop Name         | Type        | Required | Description                                                                                      |
|------------------|------------|----------|------------------------------------------------------------------------------------------------|
| `titleCheckbox`   | `String`    | No       | Label text displayed next to the checkbox.                                                     |
| `modelValue`      | `Boolean`   | No       | Current value of the checkbox (supports `v-model`).                                           |
| `valueCheckbox`   | `any`       | No       | Value emitted when the checkbox is checked.                                                    |
| `uncheckedValue`  | `any`       | No       | Value emitted when the checkbox is unchecked.                                                 |
| `idCheckbox`      | `String`    | No       | Optional HTML id for the checkbox input element.                                              |

---

## 🧩 Slots

| Name | Description |
|------|-------------|
| *Default slot* | The checkbox label content, rendered inside the component (`{{ titleCheckbox }}`). |

---

## 📘 Example Usage

```vue
<template>
  <CustomCheckbox
    v-model="isChecked"
    titleCheckbox="Accept terms"
    valueCheckbox="yes"
    :unchecked-value="'no'"
    idCheckbox="termsCheckbox"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isChecked = ref(false)
</script>

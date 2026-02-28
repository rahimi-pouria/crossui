# CustomRadioButton – Element Plus Version

## Description
The **CustomRadioButton** component is a wrapper around **Element Plus** `el-radio`.  
It supports **two-way binding via v-model, custom size, border, disabled state, and labels**.  
The component can be used individually or inside a `el-radio-group`.

---

## 📦 Props

| Prop                     | Type     | Default | Description                                                   |
|--------------------------|---------|---------|---------------------------------------------------------------|
| `modelValueRadioButton`  | `string | number | boolean` | `''`   | The value bound to the radio button via v-model.             |
| `valueRadioButton`       | `string | number | boolean` | `''`   | The value of this radio button.                                |
| `titleRadioButton`       | `string` | `''`    | The display text shown next to the radio button.              |
| `labelRadioButton`       | `string | number | boolean` | `''`   | Optional label for the radio button (used internally by `el-radio`). |
| `sizeRadioButton`        | `'medium' | 'small' | 'mini'` | `'medium'` | Size of the radio button.                                     |
| `borderRadioButton`      | `boolean` | `false` | Whether to display a border around the radio button.         |
| `disabledRadioButton`    | `boolean` | `false` | Whether the radio button is disabled.                         |

---

## Slots

This component does not provide custom slots as it wraps `el-radio` directly.

---

## Usage Example

```vue
<!-- Single Radio Button -->
<CustomRadioButton
  v-model="selectedOption"
  value-radio-button="option1"
  title-radio-button="Option 1"
  size-radio-button="small"
/>

<!-- Disabled Radio Button -->
<CustomRadioButton
  v-model="selectedOption"
  value-radio-button="option2"
  title-radio-button="Option 2"
  :disabled-radio-button="true"
/>

<!-- Radio with Border -->
<CustomRadioButton
  v-model="selectedOption"
  value-radio-button="option3"
  title-radio-button="Option 3"
  :border-radio-button="true"
/>

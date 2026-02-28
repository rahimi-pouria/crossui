# CustomCheckbox – Element Plus Version

## Description
The **CustomCheckbox** component is a wrapper around **Element Plus** `el-checkbox`.  
It provides a flexible checkbox with **v-model support**, **custom labels**, **indeterminate state**, **true/false values**, and other accessibility features.

---

## 📦 Props

| Prop                     | Type                 | Default  | Description                                                                 |
|--------------------------|--------------------|----------|-----------------------------------------------------------------------------|
| `idCheckbox`             | `string`           | `''`     | Unique ID for the checkbox element.                                         |
| `modelValue`             | `boolean \| string \| number` | `false` | Bound value for `v-model`.                                                  |
| `labelCheckbox`          | `string`           | `''`     | Label displayed next to the checkbox.                                       |
| `sizeCheckbox`           | `'medium' \| 'small' \| 'mini'` | `'medium'` | Size of the checkbox.                                                       |
| `disabledCheckBox`       | `boolean`          | `false`  | Disable the checkbox if true.                                               |
| `borderCheckBox`         | `boolean`          | `false`  | Display border around the checkbox.                                         |
| `checkedCheckBox`        | `boolean`          | `false`  | Checkbox initial checked state.                                             |
| `valueCheckBox`          | `any`              | `true`   | Value associated with the checkbox when used in checkbox groups.           |
| `trueValueCheckBox`      | `any`              | `true`   | Value representing the checked state.                                       |
| `falseValueCheckBox`     | `any`              | `false`  | Value representing the unchecked state.                                     |
| `nameCheckbox`           | `string`           | `''`     | Name attribute for the checkbox.                                            |
| `indeterminateCheckbox`  | `boolean`          | `false`  | Shows indeterminate (dash) state.                                          |
| `validateEventCheckBox`  | `boolean`          | `true`   | Whether to trigger validation events.                                       |
| `tabindexCheckBox`       | `number`           | `0`      | Tab index for keyboard navigation.                                          |
| `ariaControlsCheckBox`   | `string`           | `''`     | Value for `aria-controls` attribute.                                        |
| `trueLabelCheckBox`      | `string`           | `''`     | Label for the true value (used in groups).                                  |
| `falseLabelCheckBox`     | `string`           | `''`     | Label for the false value (used in groups).                                 |
| `ariaLabelCheckBox`      | `string`           | `''`     | Accessibility label.                                                        |
| `controlsCheckBox`       | `string`           | `''`     | Target element controlled by the checkbox.                                  |

---

## 🔄 Emits

| Event                 | Description                                                      |
|-----------------------|------------------------------------------------------------------|
| `update:modelValue`   | Emitted when the checkbox value changes (for `v-model` support).|

---

## ✅ Usage Example

```vue
<CustomCheckbox
  v-model="acceptedTerms"
  label-checkbox="I agree to the terms and conditions"
  size-checkbox="small"
  :true-value-checkbox="1"
  :false-value-checkbox="0"
  :indeterminate-checkbox="false"
/>

# CustomRadioButton – Material UI Version

## Description
The **CustomRadioButton** component is a reusable **radio button** built with **Material-UI's `Radio` and `FormControlLabel`**.  
It allows you to provide a **label** and a **value** for each radio option.

---

## Props

| Prop               | Type       | Default     | Description                                       |
|-------------------|-----------|------------|---------------------------------------------------|
| `valueRadioButton` | `string`  | `''`       | Value of the radio button, used for selection.   |
| `labelRadioButton` | `string`  | `''`       | Text label displayed next to the radio button.   |

---

## Features

✅ Fully compatible with **Material-UI forms**.  
✅ Supports grouping via **RadioGroup**.  
✅ Simple, reusable, and lightweight.

---

## Example Usage

```tsx
<CustomRadioButton valueRadioButton="option1" labelRadioButton="Option 1" />
<CustomRadioButton valueRadioButton="option2" labelRadioButton="Option 2" />

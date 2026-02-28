# CustomRadioButton – React Bootstrap Version

## Description
The **CustomRadioButton** component is a reusable wrapper around **React-Bootstrap’s `Form.Check`** for creating **radio buttons**.  
It supports **labels**, **inline display**, **reversed layout**, **validation states**, and **tooltips for feedback**.

---

## Props

| Prop                        | Type       | Default   | Description                                                                 |
|------------------------------|-----------|-----------|-----------------------------------------------------------------------------|
| `idRadioButton`             | `string`  | `''`      | HTML `id` for the radio button.                                             |
| `typeRadioButton`           | `string`  | `'radio'` | Type of the input, typically `radio`.                                       |
| `labelRadioButton`          | `string`  | `''`      | Text label displayed next to the radio button.                              |
| `titleRadioButton`          | `string`  | `''`      | Tooltip text displayed on hover.                                            |
| `reverseRadioButton`        | `boolean` | `false`   | If `true`, reverses the layout (label before input).                        |
| `disabledRadioButton`       | `boolean` | `false`   | Disables the radio button if `true`.                                        |
| `inlineRadioButton`         | `boolean` | `false`   | If `true`, displays the radio button inline with others.                    |
| `isValidRadioButton`        | `boolean` | `false`   | Applies Bootstrap valid state styling.                                       |
| `isInvalidRadioButton`      | `boolean` | `false`   | Applies Bootstrap invalid state styling.                                     |
| `feedbackTooltipRadioButton`| `boolean` | `false`   | If `true`, shows validation feedback as a tooltip.                           |

---

## Features

✅ Supports Bootstrap validation states (`isValid` / `isInvalid`).  
✅ Can display inline radio buttons.  
✅ Supports reversed layout (label before input).  
✅ Customizable tooltip feedback.  
✅ Fully compatible with React-Bootstrap forms.

---

## Example Usage

```tsx
<CustomRadioButton
    idRadioButton="option1"
    labelRadioButton="Option 1"
    typeRadioButton="radio"
    isValidRadioButton
/>

<CustomRadioButton
    idRadioButton="option2"
    labelRadioButton="Option 2"
    typeRadioButton="radio"
    isInvalidRadioButton
    feedbackTooltipRadioButton
    inlineRadioButton
/>

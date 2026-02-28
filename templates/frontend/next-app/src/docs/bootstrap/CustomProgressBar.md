# CustomProgressBar – React Bootstrap Version

## Description
The **CustomProgressBar** component is a flexible and reusable wrapper around **React-Bootstrap’s `ProgressBar`**.  
It allows you to display **progress indicators** with **labels**, **variants**, **stripes**, **animations**, and custom min/max values.

---

## Props

| Prop                        | Type       | Default   | Description                                                                 |
|------------------------------|-----------|-----------|-----------------------------------------------------------------------------|
| `nowProgressbar`            | `number`  | `0`       | Current progress value.                                                     |
| `labelProgressbar`          | `string`  | `''`      | Label to display inside the progress bar.                                   |
| `visuallyHiddenProgressBar` | `boolean` | `false`   | If `true`, hides the label visually but keeps it accessible for screen readers. |
| `variantProgressbar`        | `string`  | `'primary'` | Bootstrap variant (`primary`, `success`, `danger`, etc.).                 |
| `stripedProgressbar`        | `boolean` | `false`   | If `true`, shows stripes on the progress bar.                               |
| `animatedProgressbar`       | `boolean` | `false`   | If `true`, animates the stripes.                                           |
| `minProgressbar`            | `number`  | `0`       | Minimum value of the progress bar.                                          |
| `maxProgressbar`            | `number`  | `100`     | Maximum value of the progress bar.                                          |

---

## Features

✅ Supports Bootstrap variants for color.  
✅ Supports striped style.  
✅ Optional animation of progress.  
✅ Can display custom labels, including visually hidden labels for accessibility.  
✅ Fully compatible with React-Bootstrap.

---

## Example Usage

```tsx
<CustomProgressBar
    nowProgressbar={50}
    labelProgressbar="50%"
    variantProgressbar="success"
    stripedProgressbar
    animatedProgressbar
/>

<CustomProgressBar
    nowProgressbar={75}
    labelProgressbar="75%"
    variantProgressbar="info"
    minProgressbar={0}
    maxProgressbar={200}
/>

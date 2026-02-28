# CustomPlaceholder – React Bootstrap Version

## Description
The **CustomPlaceholder** component is a flexible and reusable wrapper around **React-Bootstrap’s `Placeholder`**.  
It allows you to display **loading placeholders** with **custom colors**, **animations**, **sizes**, **variants**, and **custom content**.

---

## Props

| Prop                     | Type       | Default   | Description                                                                 |
|---------------------------|------------|-----------|-----------------------------------------------------------------------------|
| `idPlaceholder`           | `string`   | `''`      | The HTML `id` for the placeholder element.                                  |
| `bgPlaceholder`           | `string`   | `''`      | Background color of the placeholder (`primary`, `secondary`, etc.).         |
| `animationPlaceholder`    | `string`   | `''`      | Animation type (`glow`, `wave`, or empty for none).                        |
| `sizePlaceholder`         | `string`   | `''`      | Size of the placeholder (`sm`, `lg`, etc.).                                 |
| `variantPlaceholder`      | `string`   | `''`      | Bootstrap variant for placeholder color.                                     |
| `children`                | `ReactNode`| `undefined` | Content inside the placeholder (optional).                                  |

---

## Features

✅ Supports glow and wave animations.  
✅ Customizable background colors and variants.  
✅ Supports different sizes (`sm`, `lg`).  
✅ Can wrap custom children for inline placeholders.  
✅ Fully compatible with React-Bootstrap components.

---

## Example Usage

```tsx
<CustomPlaceholder
    idPlaceholder="loading-title"
    bgPlaceholder="primary"
    animationPlaceholder="glow"
    sizePlaceholder="lg"
>
    Loading title...
</CustomPlaceholder>

<CustomPlaceholder
    idPlaceholder="loading-paragraph"
    bgPlaceholder="secondary"
    animationPlaceholder="wave"
>
    Loading paragraph content...
</CustomPlaceholder>

# CustomBadge – React Bootstrap Version

## Description
The **CustomBadge** component is a simple and reusable wrapper around **React-Bootstrap’s `Badge`**.  
It allows you to display badges with **custom text, colors, pill style, and custom classes**.

---

## Props

| Prop             | Type       | Default   | Description                                               |
|-----------------|------------|-----------|-----------------------------------------------------------|
| `idBadge`       | `string`   | `''`      | The HTML `id` for the badge element.                     |
| `title`         | `string`   | `''`      | The text displayed inside the badge.                     |
| `bgBadge`       | `string`   | `'primary'` | Bootstrap background variant (`primary`, `secondary`, etc.). |
| `textBadge`     | `string`   | `''`      | Optional text color variant (`light`, `dark`, etc.).     |
| `pillBadge`     | `boolean`  | `false`   | If `true`, displays the badge with pill style.           |
| `customClassBadge` | `string` | `''`      | Custom CSS classes applied to the badge.                |

---

## Features

✅ Supports Bootstrap badge variants (`bg` and `text`).  
✅ Optional **pill-style** badge.  
✅ Fully **customizable CSS classes**.  
✅ Reusable across multiple components or pages.

---

## Example Usage

```tsx
<CustomBadge
    idBadge="badge1"
    title="New"
    bgBadge="success"
    textBadge="light"
    pillBadge={true}
    customClassBadge="mx-2"
/>

<CustomBadge
    title="Beta"
    bgBadge="warning"
    pillBadge={false}
/>

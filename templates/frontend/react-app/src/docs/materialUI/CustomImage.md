# CustomImage – Material UI Version

## Description
The **CustomImage** component is a simple reusable image wrapper built for **Material-UI projects**.  
It allows you to render an image with **custom CSS classes** and supports accessibility with `alt` text.

---

## Props

| Prop                | Type      | Default   | Description                                         |
|---------------------|-----------|-----------|-----------------------------------------------------|
| `srcImage`          | `string`  | `''`      | The source URL of the image.                        |
| `altImage`          | `string`  | `''`      | Alt text for accessibility.                         |
| `customClassImage`  | `string`  | `''`      | Custom CSS class applied to the `<img>` element.   |

---

## Features

✅ Renders a standard image with `alt` text for accessibility.  
✅ Supports **custom styling** via `customClassImage`.  
✅ Simple wrapper for consistent image handling in MUI projects.

---

## Example Usage

```tsx
<CustomImage
    srcImage="/images/avatar.png"
    altImage="User Avatar"
    customClassImage="rounded-circle"
/>

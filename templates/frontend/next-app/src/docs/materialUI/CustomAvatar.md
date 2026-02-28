# CustomAvatar – Material UI Version

## Description
The **CustomAvatar** component is a flexible and reusable avatar built with **Material-UI (`@mui/material/Avatar`)**.  
It supports **custom images**, **alternative text**, and optional **children elements** for captions or extra content.

---

## Props

| Prop                         | Type                 | Default           | Description                                                                 |
|-------------------------------|--------------------|-----------------|-----------------------------------------------------------------------------|
| `altAvatar`                  | `string`            | `''`             | Alternative text for the avatar image.                                     |
| `srcAvatar`                  | `string`            | `''`             | Image source URL for the avatar.                                           |
| `customClassWrapperAvatar`   | `string`            | `'d-flex flex-column'` | CSS class applied to the wrapper container.                                 |
| `children`                    | `React.ReactNode`   | `undefined`      | Optional custom content rendered below the avatar.                         |

---

## Features

✅ Displays a **Material-UI avatar** with image or alt text.  
✅ Optional **children content** below the avatar.  
✅ Fully **customizable wrapper** using CSS classes.

---

## Example Usage

```tsx
<CustomAvatar
    altAvatar="Profile Picture"
    srcAvatar="https://example.com/avatar.jpg"
    customClassWrapperAvatar="d-flex align-items-center flex-column"
>
    <p className="mt-2">John Doe</p>
</CustomAvatar>

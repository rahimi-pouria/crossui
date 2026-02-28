# CustomBadge – Material UI Version

## Description
The **CustomBadge** component is a simple reusable badge built with **Material-UI (`@mui/material/Badge`)**.  
It can display a **count or indicator** on top of any child element, like icons.

---

## Props

| Prop             | Type      | Default   | Description                                           |
|------------------|-----------|-----------|-------------------------------------------------------|
| `badgeContent`   | `number`  | `0`       | The number or content displayed inside the badge.    |
| `color`          | `string`  | `'default'` | Color of the badge (`primary`, `secondary`, etc.).  |
| `children`       | `React.ReactNode` | `undefined` | The element that the badge overlays (e.g., icon). |

---

## Features

✅ Displays a **numeric or custom badge** over any child element.  
✅ Fully **customizable color** using Material-UI themes.  
✅ Can wrap any React node (icons, buttons, avatars, etc.).

---

## Example Usage

```tsx
import MailIcon from '@mui/icons-material/Mail';

<CustomBadge>
    <MailIcon color="action" />
</CustomBadge>

# CustomTooltip – Material UI Version

## Description
The **CustomTooltip** component is a wrapper for **Material UI Tooltip** that provides additional customization for helper text display.

It displays a tooltip when a user hovers over or focuses on the wrapped element.  
You can control enter and leave delays and optionally disable interactive behavior.

---

## Props

| Prop Name           | Type        | Description                                           | Required |
|---------------------|------------|-------------------------------------------------------|----------|
| titleTooltip        | string     | Text displayed inside the tooltip.                   | ✅       |
| disableInteractive  | boolean    | Disables interactive mode if set to true.           | ❌       |
| enterDelay          | number     | Delay in milliseconds before the tooltip appears.   | ❌       |
| leaveDelay          | number     | Delay in milliseconds before the tooltip disappears.| ❌       |
| children            | ReactNode  | Element that triggers the tooltip when hovered/focused. | ✅       |

---

## Example Usage

```tsx
<CustomTooltip
    titleTooltip="This is a tooltip"
    disableInteractive={false}
    enterDelay={100}
    leaveDelay={200}
>
    <button>Hover me</button>
</CustomTooltip>
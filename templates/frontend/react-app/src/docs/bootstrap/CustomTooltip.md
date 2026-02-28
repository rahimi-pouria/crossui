# CustomTooltip – React Bootstrap Version

## Description
The **CustomTooltip** component is a reusable wrapper around **React-Bootstrap’s `Tooltip`** and `OverlayTrigger`.  
It allows you to display a tooltip on any element with **custom placement**, **delays**, and optional **children elements**.

---

## Props

| Prop                  | Type                | Default   | Description                                                                                  |
|-----------------------|-------------------|-----------|----------------------------------------------------------------------------------------------|
| `idTooltip`           | `string`           | `''`      | HTML `id` for the tooltip element.                                                          |
| `titleTooltip`        | `string`           | `''`      | Text displayed inside the tooltip.                                                          |
| `showTooltip`         | `boolean`          | `false`   | Whether to show the tooltip by default.                                                     |
| `placementTooltip`    | `'top' | 'bottom' | 'left' | 'right' | `'top'` | Placement of the tooltip relative to the target element.                                    |
| `showDelay`           | `number`           | `0`       | Delay in milliseconds before showing the tooltip.                                          |
| `hideDelay`           | `number`           | `0`       | Delay in milliseconds before hiding the tooltip.                                           |
| `children`            | `React.ReactNode`  | `undefined` | Element(s) the tooltip will be attached to.                                                |

---

## Features

✅ Fully **customizable placement** of tooltip.  
✅ Supports **show/hide delays**.  
✅ Can attach to **any child element**.  
✅ Works with **React-Bootstrap OverlayTrigger** and **Tooltip**.  
✅ Lightweight, reusable, and flexible for multiple use cases.

---

## Example Usage

```tsx
<CustomTooltip
    idTooltip="tooltip-example"
    titleTooltip="Hello World"
    placementTooltip="top"
    showTooltip={false}
    showDelay={100}
    hideDelay={100}
>
    <button className="btn btn-primary">Hover me</button>
</CustomTooltip>

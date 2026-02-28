# CustomSkeleton – Material UI Version

## Description
The **CustomSkeleton** component is a loading placeholder built with **React** and **Material UI**.

It is used to display skeleton UI while content is loading, improving the perceived performance of the application.  
The component supports multiple skeleton variants such as text, rectangular, and circular.

You can control width, height, animation style, and optionally render children inside the skeleton when applicable.

---

## Props

| Prop Name        | Type                                   | Description                                  | Required |
|------------------|----------------------------------------|----------------------------------------------|----------|
| variantSkeleton  | 'text' \| 'rectangular' \| 'circular' \| 'rounded' | Type of skeleton placeholder.                | ✅ |
| widthSkeleton    | number \| string                       | Width of the skeleton.                       | ❌ |
| heightSkeleton   | number \| string                       | Height of the skeleton.                      | ❌ |
| animation        | 'pulse' \| 'wave' \| false             | Animation type of the skeleton.              | ❌ |
| children         | React.ReactNode                        | Optional content rendered inside skeleton.   | ❌ |

---

## Example Usage

```tsx
<CustomSkeleton
    variantSkeleton="text"
    widthSkeleton="100%"
    heightSkeleton={40}
/>

<CustomSkeleton
    variantSkeleton="rectangular"
    widthSkeleton={300}
    heightSkeleton={200}
    animation="wave"
/>

<CustomSkeleton
    variantSkeleton="circular"
    widthSkeleton={80}
    heightSkeleton={80}
/>
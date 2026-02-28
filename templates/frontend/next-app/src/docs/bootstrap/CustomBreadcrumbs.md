# CustomBreadcrumbs – React Bootstrap Version

## Description
The **CustomBreadcrumbs** component is a flexible and reusable wrapper around **React-Bootstrap’s `Breadcrumb`**.  
It allows you to create **breadcrumb navigation** with **custom items, links, and CSS classes**, fully integrated with React Router.

---

## Props

| Prop                         | Type                     | Default | Description                                               |
|-------------------------------|-------------------------|---------|-----------------------------------------------------------|
| `customClassWrapperBreadcrumb` | `string`               | `''`    | Custom CSS classes for the main breadcrumb wrapper.      |
| `itemBreadcrumbs`             | `Array<{id: number, title: string, href: string}>` | `[]` | Array of breadcrumb items. Each item has an `id`, `title`, and `href`. |
| `customClassBreadcrumbItem`   | `string`               | `''`    | Custom CSS classes for each `<Breadcrumb.Item>`.         |
| `customClassBreadcrumbLink`   | `string`               | `''`    | Custom CSS classes for the `<Link>` inside each item.    |

---

## Features

✅ Supports dynamic breadcrumb items via props.  
✅ Fully compatible with **React Router** links.  
✅ Customizable CSS classes for wrapper, items, and links.  
✅ Reusable across different pages or layouts.

---

## Example Usage

```tsx
const breadcrumbItems = [
    { id: 1, title: 'Home', href: '/' },
    { id: 2, title: 'Library', href: '/library' },
    { id: 3, title: 'Data', href: '/library/data' },
];

<CustomBreadcrumbs
    itemBreadcrumbs={breadcrumbItems}
    customClassWrapperBreadcrumb="my-breadcrumbs"
    customClassBreadcrumbItem="breadcrumb-item"
    customClassBreadcrumbLink="text-primary"
/>

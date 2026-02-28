# CustomCollapse – Element Plus Version

## Description
The **CustomCollapse** component is a flexible collapsible panel built on top of **Element Plus** `el-collapse` and `el-collapse-item`.  
It supports **accordion mode, dynamic items, custom slots, and reactive v-model binding**.  
Each collapse item can display a default description or a fully custom slot.

---

## 📦 Props

| Prop                        | Type                                   | Default  | Description                                                         |
|-----------------------------|---------------------------------------|---------|---------------------------------------------------------------------|
| `modelValue`                | `string \| number \| Array<string \| number>` | `''`    | The current active panel(s) bound via v-model.                     |
| `collapseItem`              | `Array<{ id: string | number; title: string; nameCollapse?: string; description?: string }>` | `[]` | Array of collapse items to render dynamically.                     |
| `accordionCollapse`         | `boolean`                              | `false` | Whether only one panel can be open at a time (accordion mode).     |
| `titleCollapse`             | `string`                               | `''`    | Default title if `collapseItem` is not provided.                   |
| `nameCollapse`              | `string | number`                      | `''`    | Default name for the collapse item if `collapseItem` is not used.  |
| `descriptionCollapse`       | `string`                               | `''`    | Default description if `collapseItem` is not provided.             |
| `customClassWrapperCollapse`| `string`                               | `''`    | Additional CSS class for the collapse wrapper.                     |
| `customClassDescriptionCollapse` | `string`                          | `''`    | Additional CSS class for the description content.                  |

---

## Slots

| Slot Name                  | Description                                                          |
|----------------------------|----------------------------------------------------------------------|
| `customBody{id}`           | Optional slot for fully custom content of each collapse item, where `{id}` is the item id. |

---

## Usage Example

```vue
<CustomCollapse
  v-model="activePanels"
  :collapse-item="[
    { id: 1, title: 'Panel 1', description: 'Content for Panel 1' },
    { id: 2, title: 'Panel 2', description: 'Content for Panel 2' },
    { id: 3, title: 'Panel 3', description: 'Content for Panel 3' }
  ]"
  :accordion-collapse="true"
  custom-class-wrapper-collapse="my-collapse-wrapper"
  custom-class-description-collapse="my-collapse-description"
/>

<!-- Using Custom Slot for Item 2 -->
<template #customBody2>
  <div>Fully custom content for Panel 2</div>
</template>

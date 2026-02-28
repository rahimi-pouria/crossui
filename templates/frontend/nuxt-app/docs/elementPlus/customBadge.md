# CustomBadge – Element Plus Version

## Description
The **CustomBadge** component is a wrapper around **Element Plus** `el-badge`.  
It allows you to display **numeric badges, dot indicators, or custom content**.  
The component supports dynamic values, maximum count, custom colors, and conditional visibility.

---

## 📦 Props

| Prop                | Type        | Default  | Description                                                                 |
|--------------------|------------|----------|-----------------------------------------------------------------------------|
| `idBadge`           | `string`   | `''`     | Unique ID for the badge element.                                            |
| `valueBadge`        | `string \| number` | `''` | Numeric or string value displayed inside the badge.                        |
| `customClassBadge`  | `string`   | `''`     | Custom CSS classes applied to the badge wrapper.                             |
| `maxBadge`          | `number`   | `99`     | Maximum value to display before showing `max+` format.                       |
| `isDotBadge`        | `boolean`  | `false`  | If true, shows a small dot instead of a numeric badge.                       |
| `hiddenBadge`       | `boolean`  | `false`  | If true, hides the badge completely.                                        |
| `typeBadge`         | `string`   | `'primary'` | Preset badge style type (`primary`, `success`, `warning`, `info`, `danger`).|
| `showZeroBadge`     | `boolean`  | `false`  | Whether to show the badge when the value is zero.                             |
| `colorBadge`        | `string`   | `''`     | Custom color for the badge background.                                       |

---

## Slots

| Slot Name           | Description                                                      |
|--------------------|------------------------------------------------------------------|
| `content`           | Default slot for the badge trigger content.                      |
| `customBodyBadge`   | Optional slot for fully custom badge content.                    |

---

## Usage Example

```vue
<CustomBadge
  :value-badge="5"
  :max-badge="99"
  type-badge="success"
  :color-badge="'#FF5722'"
>
  <template #content>
    <el-button>Notifications</el-button>
  </template>
</CustomBadge>

<!-- Dot Badge -->
<CustomBadge
  :is-dot-badge="true"
  type-badge="danger"
>
  <template #content>
    <i class="el-icon-bell"></i>
  </template>
</CustomBadge>

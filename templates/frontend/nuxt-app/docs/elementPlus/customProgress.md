# CustomProgress – Element Plus Version

## Description
The **CustomProgress** component is a flexible progress bar built on top of **Element Plus** `el-progress`.  
It supports **dynamic percentage, text inside, custom colors, striped effect, duration, and indeterminate state**.  
The component can display progress with multiple styles and animated stripes.

---

## 📦 Props

| Prop                  | Type                                     | Default  | Description                                                          |
|-----------------------|-----------------------------------------|----------|----------------------------------------------------------------------|
| `idProgress`          | `string`                                | `''`     | Unique ID for the progress element.                                   |
| `percentageProgress`  | `number`                                | `0`      | Current percentage value of the progress bar.                        |
| `textInside`          | `boolean`                               | `false`  | Whether to display the percentage text inside the progress bar.      |
| `strokeWidthProgress` | `number`                                | `6`      | Height of the progress bar stroke.                                    |
| `statusProgress`      | `'success' | 'exception' | 'warning' | 'info'` | `''` | Status type of the progress bar.                                     |
| `stripedProgress`     | `boolean`                               | `false`  | Whether to show striped effect.                                       |
| `stripedFlowProgress` | `boolean`                               | `false`  | Whether the stripes should animate.                                   |
| `durationProgress`    | `number`                                | `1`      | Transition duration in seconds for the progress change.              |
| `indeterminateProgress` | `boolean`                             | `false`  | If true, shows an indeterminate progress bar.                        |
| `colorProgress`       | `string | Function`                     | `''`     | Custom color or gradient for the progress bar.                       |

---

## Slots

This component does not provide custom slots as it wraps the `el-progress` component directly.

---

## Usage Example

```vue
<!-- Basic Progress -->
<CustomProgress
  id-progress="upload-progress"
  :percentage-progress="70"
  text-inside
  :stroke-width-progress="20"
/>

<!-- Success Progress with Striped Animated Effect -->
<CustomProgress
  id-progress="download-progress"
  :percentage-progress="50"
  status-progress="success"
  :striped-progress="true"
  :striped-flow-progress="true"
  :duration-progress="2"
  color-progress="#409EFF"
/>

<!-- Indeterminate Progress -->
<CustomProgress
  id-progress="indeterminate-progress"
  :indeterminate-progress="true"
  :stroke-width-progress="15"
/>

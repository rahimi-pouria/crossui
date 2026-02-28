# CustomSteps – Element Plus Version

## Description
The **CustomSteps** component is a flexible steps component built on top of **Element Plus** `el-steps`.  
It supports **horizontal and vertical steps, simple mode, custom spacing, icons, and step descriptions**.  
You can render dynamic steps using an array of step items.

---

## 📦 Props

| Prop                     | Type     | Default | Description                                                       |
|--------------------------|---------|---------|-------------------------------------------------------------------|
| `idStep`                 | `string` | `''`    | Unique ID for the steps wrapper.                                   |
| `stepItems`              | `Array<{ title: string; icon?: string }>` | `[]` | Array of step objects containing `title` and optional `icon`.     |
| `activeSteps`            | `number` | `0`     | The index of the currently active step.                            |
| `spaceSteps`             | `string \| number` | `'auto'` | Space between steps (can be number in px or 'auto').             |
| `simpleSteps`            | `boolean` | `false` | If true, renders steps in simple style.                           |
| `directionSteps`         | `'horizontal' | 'vertical'` | `'horizontal'` | Direction of the steps.                                         |
| `processStatusSteps`     | `'wait' | 'process' | 'finish' | 'error'` | `'process'` | Status of the process.                                        |
| `alignCenterSteps`       | `boolean` | `false` | Whether to align steps content to the center.                     |
| `descriptionSteps`       | `boolean` | `false` | Whether to show step descriptions.                                 |
| `customClassWrapperSteps`| `string` | `''`    | Additional CSS classes for the steps wrapper.                      |

---

## Slots

This component wraps `el-steps` directly, so custom slots are not provided. You can customize step content by passing `stepItems` array with `title` and `icon`.

---

## Usage Example

```vue
<CustomSteps
  id-step="process-steps"
  :step-items="[
    { title: 'Step 1', icon: 'el-icon-user' },
    { title: 'Step 2', icon: 'el-icon-s-check' },
    { title: 'Step 3', icon: 'el-icon-check' }
  ]"
  :active-steps="1"
  :space-steps="200"
  :simple-steps="false"
  direction-steps="horizontal"
  process-status-steps="process"
  :align-center-steps="true"
  :description-steps="true"
  custom-class-wrapper-steps="my-steps-wrapper"
/>

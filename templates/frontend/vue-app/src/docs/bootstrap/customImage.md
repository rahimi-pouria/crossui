# CustomImage Component

`CustomImage` is a Vue 3 wrapper component built with [BootstrapVue Next](https://github.com/bootstrap-vue/bootstrap-vue-next).  
It extends the native `BImg` component with TypeScript props for full customization and responsive image support.

---

## ✨ Features
- Fully responsive image with optional fluid and fluid-grow modes
- Supports lazy loading for performance optimization
- Thumbnail style support
- Rounded corners customization (all sides individually)
- Custom width, height, alt text, and sizes
- Easily reusable in any Vue 3 + BootstrapVueNext project

---

## 📦 Props

| Prop Name         | Type                 | Required | Description                                                                                      |
|------------------|--------------------|----------|------------------------------------------------------------------------------------------------|
| `id`              | `String`            | No       | HTML id for the image element.                                                                 |
| `srcImage`        | `String`            | Yes      | Source URL of the image.                                                                       |
| `alt`             | `String`            | No       | Alternative text for the image.                                                               |
| `fluid`           | `Boolean`           | No       | Makes the image scale with parent width.                                                      |
| `fluidGrow`       | `Boolean`           | No       | Makes the image grow fluidly to fill the parent container.                                     |
| `lazy`            | `Boolean`           | No       | Enables lazy loading of the image.                                                            |
| `width`           | `String \| Number`  | No       | Sets the width of the image.                                                                  |
| `height`          | `String \| Number`  | No       | Sets the height of the image.                                                                 |
| `thumbnail`       | `Boolean`           | No       | Applies Bootstrap thumbnail styling.                                                          |
| `sizes`           | `String`            | No       | Image sizes attribute for responsive images.                                                  |
| `rounded`         | `Boolean`           | No       | Applies rounded corners to all sides.                                                        |
| `roundedTop`      | `Boolean`           | No       | Rounds the top corners.                                                                       |
| `roundedBottom`   | `Boolean`           | No       | Rounds the bottom corners.                                                                    |
| `roundedStart`    | `Boolean`           | No       | Rounds the left/start corners.                                                               |
| `roundedEndP`     | `Boolean`           | No       | Rounds the right/end corners.                                                                |

---

## 🧩 Slots

> This component does not provide slots; all configuration is via props.

---

## 📘 Example Usage

```vue
<template>
  <CustomImage
    id="myImage"
    srcImage="https://via.placeholder.com/300"
    alt="Placeholder image"
    fluid
    rounded
    width="300"
    height="200"
  />
</template>

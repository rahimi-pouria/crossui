# CustomImage – Element Plus Version

## Description
The **CustomImage** component is a wrapper around **Element Plus** `el-image`.  
It allows you to display an image with **lazy loading, preview, zooming, and custom classes**.  
The component supports interactive previews with `CustomButton`, multiple images, and zoom settings.

---

## 📦 Props

| Prop                 | Type     | Default | Description                                                          |
|----------------------|---------|---------|----------------------------------------------------------------------|
| `idImage`            | `string` | `''`    | Unique ID for the image element.                                      |
| `srcImg`             | `string` | `''`    | Source URL of the main image.                                         |
| `altImage`           | `string` | `''`    | Alt text for the image.                                               |
| `fitImage`           | `'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | `'cover'` | Object-fit mode for the image.                                      |
| `lazyLoad`           | `boolean` | `true` | Enable lazy loading for the image.                                   |
| `zoomRate`           | `number` | `1.2`   | Zoom rate when previewing the image.                                  |
| `maxScale`           | `number` | `3`     | Maximum zoom scale.                                                  |
| `minScale`           | `number` | `0.8`   | Minimum zoom scale.                                                  |
| `showProgress`       | `boolean` | `true` | Show loading progress bar when image is loading.                     |
| `previewSrcList`     | `string[]` | `[]`  | List of image URLs for preview.                                       |
| `titleBtn`           | `string` | `''`    | Title for the wrapping CustomButton (if used).                        |
| `customClassImage`   | `string` | `''`    | Additional CSS classes applied to the image.                          |
| `initialIndex`       | `number` | `0`     | Initial index when opening the image viewer.                          |

---

## Slots

| Slot Name           | Description                                                      |
|--------------------|------------------------------------------------------------------|
| `customBodyImage`   | Slot used inside `CustomButton` to render the `el-image` with custom classes or overlays. |

---

## Usage Example

```vue
<CustomImage
  id-image="profile-image"
  src-img="/images/user.jpg"
  alt-image="User Avatar"
  :preview-src-list="['/images/user.jpg', '/images/user2.jpg']"
  :lazy-load="true"
  :zoom-rate="1.5"
  :max-scale="4"
  :min-scale="0.5"
  :show-progress="true"
  title-btn="Preview Image"
/>

<!-- Multiple Images Preview -->
<CustomImage
  id-image="gallery-image"
  src-img="/images/gallery1.jpg"
  :preview-src-list="['/images/gallery1.jpg', '/images/gallery2.jpg', '/images/gallery3.jpg']"
  title-btn="Open Gallery"
/>

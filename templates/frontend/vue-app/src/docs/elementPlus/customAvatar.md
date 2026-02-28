# CustomAvatar – Element Plus Version

## Description
The **CustomAvatar** component is a flexible avatar component built on top of **Element Plus** `el-avatar`.  
It supports rendering a **nested image** using the **CustomImage** component, allowing features like image preview, alt text, and custom sizing.

---

## 📦 Props

| Prop           | Type     | Default | Description                                                      |
|----------------|---------|---------|------------------------------------------------------------------|
| `size`         | `number \| string` | `'medium'` | Size of the avatar. Can be a number (pixels) or string ('small', 'medium', 'large'). |
| `srcAvatar`    | `string` | `''`    | Image URL displayed in the avatar.                                |
| `srcImg`       | `string` | `''`    | Image URL for the nested CustomImage component.                   |
| `altImage`     | `string` | `''`    | Alt text for the nested image.                                     |
| `previewSrcList` | `string[]` | `[]` | List of image URLs for preview (used in CustomImage).            |

---

## Slots

The **CustomAvatar** component uses the default slot of `el-avatar` to render the **CustomImage** component.

---

## Usage Example

```vue
<CustomAvatar
  :size="80"
  src-avatar="/images/avatar.jpg"
  src-img="/images/avatar.jpg"
  alt-image="User Avatar"
  :preview-src-list="['/images/avatar.jpg', '/images/avatar2.jpg']"
/>

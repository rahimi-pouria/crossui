# CustomImage – React Bootstrap Version

## Description
The **CustomImage** component is a flexible and reusable wrapper around **React-Bootstrap’s `Image`** component.  
It allows you to display images with **custom styling**, **rounded corners**, **circles**, **thumbnails**, **fluid resizing**, and **custom Bootstrap prefixes**.

---

## Props

| Prop                   | Type       | Default   | Description                                                               |
|------------------------|------------|-----------|---------------------------------------------------------------------------|
| `idImage`              | `string`   | `''`      | The HTML `id` for the image element.                                      |
| `srcImage`             | `string`   | `''`      | Source URL for the image.                                                 |
| `altImage`             | `string`   | `''`      | Alt text for accessibility.                                               |
| `customClassImage`     | `string`   | `''`      | Custom CSS classes applied to the image.                                  |
| `roundedImage`         | `boolean`  | `false`   | Applies border-radius for rounded corners.                                |
| `roundedCircleImage`   | `boolean`  | `false`   | Displays the image as a circle.                                           |
| `thumbnailImage`       | `boolean`  | `false`   | Adds a border and padding to display the image as a thumbnail.            |
| `fluidImage`           | `boolean`  | `false`   | Makes the image scale with its parent container (`width: 100%`).          |
| `bsPrefixImage`        | `string`   | `''`      | Custom Bootstrap prefix for the image component.                          |

---

## Features

✅ Supports rounded corners, circular images, and thumbnails.  
✅ Fluid images scale with parent container.  
✅ Fully customizable CSS classes and Bootstrap prefix.  
✅ Works seamlessly with React-Bootstrap forms and layouts.

---

## Example Usage

```tsx
<customImages
    idImage="profile-pic"
    srcImage="/images/profile.jpg"
    altImage="Profile Picture"
    roundedImage={true}
    roundedCircleImage={false}
    thumbnailImage={true}
    fluidImage={true}
    customClassImage="my-image-class"
/>

<customImages
    idImage="avatar"
    srcImage="/images/avatar.png"
    altImage="Avatar"
    roundedCircleImage={true}
    customClassImage="avatar-class"
/>

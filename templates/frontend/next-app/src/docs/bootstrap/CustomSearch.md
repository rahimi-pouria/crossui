# CustomSearch – React Bootstrap Version

## Description
The **CustomSearch** component is a flexible and reusable **search input wrapper** built with **React** and **React-Bootstrap**.  
It leverages the **CustomInput** component and supports **labels**, **validation**, **password toggling**, and **real-time value change callbacks**.  
You can also include **additional children elements**, such as buttons or icons, inside the search wrapper.

---

## Props

| Prop                  | Type                                                                 | Default     | Description                                                                                  |
|-----------------------|----------------------------------------------------------------------|------------|----------------------------------------------------------------------------------------------|
| `idInput`             | `string`                                                             | `''`       | The HTML `id` for the input element.                                                         |
| `label`               | `string`                                                             | `''`       | Text label displayed above the search input.                                                |
| `typeInput`           | `string`                                                             | `'text'`  | Type of the input (`text`, `email`, `password`, etc.).                                      |
| `required`            | `boolean`                                                            | `false`    | If `true`, marks the field as required and shows validation error if empty.                |
| `errorEmail`          | `string`                                                             | `'Invalid email address'` | Custom error message for invalid email input.                                        |
| `customClassInput`    | `string`                                                             | `''`       | Custom CSS class for the input element.                                                     |
| `customClassLabel`    | `string`                                                             | `''`       | Custom CSS class for the label.                                                             |
| `customIconEye`       | `string`                                                             | `''`       | Custom class for the eye/eye-slash icon when input type is `password`.                      |
| `showError`           | `boolean`                                                            | `false`    | Force showing the validation error message.                                                 |
| `onValueChange`       | `(id: string, value: string, isValid: boolean) => void`             | `undefined`| Callback triggered when input value changes, returning the `id`, `value`, and `isValid`.    |
| `children`            | `React.ReactNode`                                                    | `undefined`| Optional additional content inside the search wrapper, e.g., buttons or icons.             |

---

## Features

✅ Wraps **CustomInput** for reusable search functionality.  
✅ Supports **required field validation** and **email validation**.  
✅ **Password toggle** support via CustomInput.  
✅ Real-time **onValueChange callback** for parent components.  
✅ Flexible wrapper allowing **additional children elements**.  
✅ Fully **customizable with CSS classes**.

---

## Example Usage

```tsx
<CustomSearch
    idInput="search-box"
    label="Search"
    typeInput="text"
    required
    customClassInput="form-control"
    customClassLabel="mb-2 fw-bold"
    onValueChange={(id, value, isValid) => console.log({ id, value, isValid })}
>
    <button className="btn btn-primary ms-2">Go</button>
</CustomSearch>

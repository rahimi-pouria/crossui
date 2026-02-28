import { customImageProps } from "../../props/material/customImage";

const CustomImage = (props: customImageProps) => {
    return (
        <>
            <img className={props.customClassImage} src={props.srcImage} alt={props.altImage} />
        </>
    )
}

export default CustomImage
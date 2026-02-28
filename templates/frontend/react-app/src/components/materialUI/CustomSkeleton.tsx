import Skeleton from '@mui/material/Skeleton';

import { customSkeletonProps } from "../../props/material/CustomSkeleton";
const CustomSkeleton = (props: customSkeletonProps) => {
    return (
        <>
            <Skeleton variant={props.variantSkeleton} width={props.widthSkeleton}
                      height={props.heightSkeleton} animation={props.animation}>
                {["text", "rectangular", "circular"].includes(props.variantSkeleton) ? props.children : null}
            </Skeleton>
        </>
    )
}

export default CustomSkeleton
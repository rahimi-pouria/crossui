import * as React from "react";

export interface customSkeletonProps  {
    widthSkeleton?: number | string;
    heightSkeleton?: number | string;
    variantSkeleton?: "text" | "rectangular" | "circular";
    animation?: "pulse" | "wave" | false;
    children?: React.ReactNode,
}
import * as React from "react";

export interface customTooltipProps {
    id: string;
    titleTooltip: string;
    disableInteractive: boolean;
    enterDelay: number
    leaveDelay: number
    followCursor: boolean
    children?: React.ReactNode;
}
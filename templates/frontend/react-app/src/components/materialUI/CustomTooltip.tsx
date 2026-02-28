import Tooltip from '@mui/material/Tooltip';
import { customTooltipProps } from "../../props/material/customTooltip";

const CustomTooltip = (props: customTooltipProps) => {
    return (
        <>
            <Tooltip title={props.titleTooltip} disableInteractive={props.disableInteractive}
                     leaveDelay={props.leaveDelay} enterDelay={props.enterDelay}>
                {props.children}
            </Tooltip>
        </>
    )
}

export default CustomTooltip
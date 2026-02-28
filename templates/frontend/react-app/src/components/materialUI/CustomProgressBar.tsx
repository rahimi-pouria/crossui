import LinearProgress from '@mui/material/LinearProgress';
import { customProgressBarProps } from "../../props/material/customProgressBar";

const CustomProgressBar = (props: customProgressBarProps) => {
    return (
        <>
            <LinearProgress variant={props.value ? "determinate" : "indeterminate"} value={props.value} />
        </>
    )
}

export default CustomProgressBar
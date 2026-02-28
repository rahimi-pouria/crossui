import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import { customRadioButtonProps } from "../../props/material/customRadioButton";

const CustomRadioButton = (props: customRadioButtonProps) => {
    return (
        <>
            <FormControlLabel value={props.valueRadioButton} control={<Radio />} label={props.labelRadioButton} />
        </>
    )
}

export default CustomRadioButton
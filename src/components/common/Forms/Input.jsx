import React from "react";
import {TextField} from "@mui/material";


export const Input = React.forwardRef((props, ref) => {

    return(
        <TextField inputRef={ref} {...props}
                   variant={props.variant || 'outlined'}
                   margin={props.margin ||'normal'}
                   size={props.size ||'small'}
                   fullWidth={props.fullWidth || false} />
    )

})
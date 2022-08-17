import React from "react";
import {TextField} from "@mui/material";


export const Input = React.forwardRef((props, ref) => {

    return(
        <TextField inputRef={ref} {...props} variant='outlined' margin='normal' size='small' fullWidth/>
    )

})
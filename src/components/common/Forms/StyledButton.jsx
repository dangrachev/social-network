import React from "react";
import {Button} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3,0,2),
        padding: '10px 20px'
    }
}))

export const StyledButton = ({children, ...props}) => {
    const styles = useStyles();
    const theme = useTheme();

    return (
        <Button {...props}
                className={props.className || styles.root}
                variant={theme.palette.mode === 'dark' ? 'outlined' : 'contained'}
                color={props.color || 'primary'}
                size={props.size || 'large'}
                fullWidth={props.fullWidth || false}>{children}</Button>
    )
}
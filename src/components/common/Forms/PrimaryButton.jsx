import React from "react";
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3,0,2),
        padding: "10px 35px"
    }
}))

export const PrimaryButton = ({children, ...props}) => {
    const styles = useStyles()

    return (
        <Button type='submit' className={styles.root} variant='contained' color='primary' fullWidth>{children}</Button>
    )
}
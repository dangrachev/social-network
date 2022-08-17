import React from "react";
import {Container, makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    }
}))

export const MainContainer = ({children, ...props}) => {
    const styles = useStyles()

    return (
        <Container className={styles.root} {...props} container='main' maxWidth='xs'>{children}</Container>
    )
}
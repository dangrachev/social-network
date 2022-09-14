import React from 'react';
import {Controller} from 'react-hook-form'
import Dropzone from "react-dropzone";
import {Box, List, ListItem, ListItemIcon, ListItemText, Paper} from "@mui/material";
import {CloudUpload, InsertDriveFile} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '400px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#cbcbcb',
        cursor: 'pointer',
        color: '#333',
        padding: '10px',
        marginTop: '15px'
    },
    icon: {
        marginTop: '16px',
        color: '#888',
        fontSize: '42px'
    },

}))

const FileInput = ({control, name}) => {
    const styles = useStyles();

    return (
        <Box >
            <Controller
                control={control}
                name={name}
                defaultValue={[]}
                shouldUnregister={true}
                render={({field: {onChange, onBlur, value} }) => <>
                    <Dropzone onDrop={onChange}>
                        {
                            ({getRootProps, getInputProps}) => <Paper className={styles.root} variant='outlined' {...getRootProps()}>
                                <CloudUpload className={styles.icon}/>
                                <input {...getInputProps()} name={name} onBlur={onBlur} />
                                <p>Drag 'n' drop file here or click to select file</p>
                            </Paper>
                        }
                    </Dropzone>
                    <List>
                        {
                            value.map((file, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <InsertDriveFile/>
                                    </ListItemIcon>
                                    <ListItemText primary={file.name} secondary={file.size}/>
                                </ListItem>
                            ))
                        }
                    </List>
                </>}/>
        </Box>
    );
};

export default FileInput;
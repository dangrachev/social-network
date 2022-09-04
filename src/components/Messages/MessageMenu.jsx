import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {makeStyles} from '@material-ui/core/styles';
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    editMenu: {
        position: 'sticky',
        top: 0,
        width: 'auto',
        height: '50px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        boxShadow: '0 6px 8px rgba(0,0,0,0.2)',
        backgroundColor: '#fff',
        zIndex: 1
    },
    confirmModal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: 24,
        padding: '14px',
        textAlign: 'center'
    },
    btn: {
        margin: theme.spacing(3,0,2),
        padding: '10px 25px',
    }
}));


const MessageMenu = React.memo((props) => {
    const styles = useStyles();
    let [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
        props.setEditMode(false)
        console.log(isModalOpen)
    }

    const confirmDeleteMessage = () => {
        setIsModalOpen(false);
        props.setEditMode(false);
        props.onDeleteMessage(props.messageId, props.userId);
    }

    return (
        <>
            {props.editMode && <div className={styles.editMenu}>
                <Tooltip title="Delete message">
                    <IconButton onClick={openModal}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Close menu">
                    <IconButton onClick={props.closeMenu}>
                        <CloseIcon/>
                    </IconButton>
                </Tooltip>
            </div>}

            <Modal
                open={isModalOpen}
                onClose={closeModal}>
                <Box className={styles.confirmModal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" >
                        Delete message?
                    </Typography>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <Button className={styles.btn} style={{backgroundColor: '#bd0000'}}
                                variant='contained'
                                color='secondary'
                                size='medium'
                                onClick={confirmDeleteMessage}>Delete</Button>

                        <Button className={styles.btn}
                                variant='contained'
                                color='primary'
                                size='medium'
                                onClick={closeModal}>Cancel</Button>
                    </div>
                </Box>
            </Modal>
        </>
    );
});


export default MessageMenu;
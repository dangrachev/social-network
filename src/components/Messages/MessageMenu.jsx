import React, {useState} from 'react';
import {Box, Paper, Modal,Typography, Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {makeStyles} from '@mui/styles';
import {StyledButton} from "../common/Forms/StyledButton";

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
        borderRadius: 0,
        zIndex: 1
    },
    confirmModal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        borderRadius: '8px',
        boxShadow: 24,
        padding: '14px',
        textAlign: 'center'
    },
    btn: {
        margin: theme.spacing(3,0,2),
        padding: '12px 30px',
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
    }

    const confirmDeleteMessage = () => {
        setIsModalOpen(false);
        props.setEditMode(false);
        props.onDeleteMessage(props.messageId, props.userId);
    }

    return (
        <>

            {props.editMode && <Box component={Paper} className={styles.editMenu}>
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
            </Box>}

            <Modal
                open={isModalOpen}
                onClose={closeModal}>
                <Box component={Paper} className={styles.confirmModal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" >
                        Delete message?
                    </Typography>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <StyledButton className={styles.btn}
                                      color='error'
                                      size='medium'
                                      onClick={confirmDeleteMessage}>Delete</StyledButton>

                        <StyledButton className={styles.btn}
                                      size='medium'
                                      onClick={closeModal}>Cancel</StyledButton>
                    </div>
                </Box>
            </Modal>
        </>
    );
});


export default MessageMenu;
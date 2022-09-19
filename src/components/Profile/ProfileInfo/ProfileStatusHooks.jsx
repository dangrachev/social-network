import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Box, ListItemText, Paper, Skeleton, Typography} from "@mui/material";
import {Input} from "../../common/Forms/Input";
import {StyledButton} from "../../common/Forms/StyledButton";
import {makeStyles} from "@mui/styles";
import style from './ProfileStatus.module.css';


const useStyles = makeStyles(({theme}) => ({
    status_wrapper: {
        height: '100px',
        width: '280px',
    },
    inputWrap:  {
        position: 'absolute',
        top: '17px',
        height: '95px'
    },
    statusInput: {
        width: '200px',
    },
    btn_saveStatus: {
        bottom: '-55px',
        left: '-200px',
        width: '75px',
    },
    statusOwner: {
        cursor: 'pointer'
    }


}))

const ProfileStatusHooks = (props) => {

    const styles = useStyles()

    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);

    useLayoutEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return <div className={styles.status_wrapper}>
        {
            props.isOwner
                ? <div>
                    {
                        !editMode
                            ? <div className={styles.statusOwner}>
                                <Typography variant="subtitle1" sx={{color: 'text.secondary'}}
                                            onDoubleClick={activateEditMode}>{props.status || 'Set the status'}</Typography>
                            </div>
                            : <Box className={styles.inputWrap} onMouseLeave={() => {setEditMode(false)}}>
                                <Input className={styles.statusInput}
                                       variant='standard'
                                       autoFocus={true}
                                       value={status}
                                       onChange={onStatusChange}/>
                                <StyledButton className={styles.btn_saveStatus}
                                              size='medium'
                                              onClick={deactivateEditMode}>Save</StyledButton>
                            </Box>
                    }
                </div>
                : <div className={style.statusUser}>
                    <Typography variant="subtitle1" sx={{color: 'text.secondary'}}>{props.status || ''}</Typography>
                </div>
        }
    </div>
}

export default ProfileStatusHooks;
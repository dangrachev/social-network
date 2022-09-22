import React, {useRef, useState} from "react";
import {connect} from "react-redux";
import {updateProfileData, updateUserPhoto} from "../../Redux/profile-reducer";
import {Box, Typography} from "@mui/material";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Switch from '@mui/material/Switch';
import ProfileDataForm from "./ProfileDataForm";
import {useForm} from "react-hook-form";
import {StyledButton} from "../common/Forms/StyledButton";
import FileInput from "../common/Forms/FileInput";
import styles from './Settings.module.css';


const Settings = (props) => {
    let [editMode, setEditMode] = useState(false);
    const {control, handleSubmit} = useForm({});

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const sendPhoto = (photoFile) => {
        setEditMode(false);
        props.updateUserPhoto(photoFile);
    }

    const onSubmit = (data) => {
        const photoFile = data.file[0];
        sendPhoto(photoFile);
    }

    return (
        <Box >
            <Typography variant='h4'>Settings</Typography>
            <div className={styles.themeModeBlock}>
                <Typography variant='h6'>Theme mode</Typography>
                <div className={styles.themeModeBlock__switchBtn}>
                    <Switch checked={props.themeMode !== 'dark'} onChange={props.switchThemeMode} />
                    {props.themeMode === 'dark'
                        ? <ModeNightIcon color='secondary'/>
                        : <LightModeIcon color='info'/>}
                </div>
            </div>

            <div className={styles.editAvatar} >
                <div className={styles.editFormHead} onClick={toggleEditMode}>
                    <Typography variant="h6"
                                component="h2">
                        Edit avatar
                    </Typography>
                    {editMode ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                </div>

                {editMode && <form onSubmit={handleSubmit(onSubmit)} >
                        <FileInput control={control} name='file' />
                        <StyledButton type='submit'
                                       size='small'
                                       style={{marginTop: '5px'}}>Upload photo</StyledButton>
                    </form>}
            </div>

            <ProfileDataForm myProfile={props.myProfile}
                             updateProfileData={props.updateProfileData}/>
        </Box>
    );

}

const mapStateToProps = (state) => {
    return {
        myProfile: state.profilePage.myProfile
    }
}

const SettingsContainer = connect(mapStateToProps, {updateProfileData, updateUserPhoto})(Settings);

export default SettingsContainer;
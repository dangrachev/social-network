import React, {useState} from 'react';
import {Box, Checkbox, FormControlLabel, Typography, Paper} from '@mui/material';
import {Input} from "../common/Forms/Input";
import {useForm} from "react-hook-form";
import {Form} from "../common/Forms/Form";
import {styled} from "@mui/material";
import {StyledButton} from "../common/Forms/StyledButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from './Settings.module.css'

const StyledBox = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    bgcolor: 'background.default',
    color: 'text.primary',
    boxShadow: 24,
    p: 2,
    paddingTop: '20px',
    paddingBottom: '5px',
    margin: '0 auto'
}));

const ProfileDataForm = (props) => {
    const [open, setOpen] = useState(false)
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur'
    });

    const toggleOpen = () => {
        setOpen(!open)
    }

    const sendProfileData = (profileData) => {
        props.updateProfileData(profileData);
    }

    return (
        <StyledBox >
            <div className={styles.editFormHead} onClick={toggleOpen}>
                <Typography variant="h6"
                            component="h2" >
                    Here you can edit your profile
                </Typography>
                {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </div>
            {open && <Box component={Paper} style={{width: '450px', padding: '20px 20px', borderRadius: '20px'}}>
                <Form onSubmit={handleSubmit(sendProfileData)}>
                    <Input {...register('fullName', {
                        required: 'This field is required'
                    })}
                           id='fullName'
                           name='fullName'
                           label='Name'
                           type='text'
                           error={!!errors.fullName}
                           helperText={errors?.fullName?.message}
                           fullWidth={true}/>
                    <Input {...register('aboutMe', {
                        required: 'This field is required'
                    })}
                           id='aboutMe'
                           name='aboutMe'
                           label='About me'
                           type='text'
                           multiline
                           error={!!errors.aboutMe}
                           helperText={errors?.aboutMe?.message}
                           fullWidth={true}/>
                    <Input {...register('lookingForAJobDescription', {
                        required: 'This field is required'
                    })}
                           id='lookingForAJobDescription'
                           name='lookingForAJobDescription'
                           label='Describe your professional skills'
                           type='text'
                           multiline
                           error={!!errors.lookingForAJobDescription}
                           helperText={errors?.lookingForAJobDescription?.message}
                           fullWidth={true}/>
                    <FormControlLabel
                        control={<Checkbox {...register('lookingForAJob')}
                                           name='lookingForAJob'
                                           color='primary' />}
                        label='Looking for a job?'/>

                    <Typography id="modal-modal-title"
                                variant="h6"
                                component="h2" sx={{paddingTop: '20px'}}>
                        My contacts:
                    </Typography>
                    {
                        Object.keys(props.myProfile.contacts).map(key => (
                            <Input {...register(`contact.${key}`)}
                                   key={key.id}
                                   id={key.id}
                                   name={`contact.${key}`}
                                   label={key}
                                   type='text'
                                   fullWidth={true}/>))
                    }
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <StyledButton type='submit' color='primary' sx={{width: '100px'}}>Save</StyledButton>
                    </div>
                </Form>
            </Box>}

        </StyledBox>
    );
};

export default ProfileDataForm;
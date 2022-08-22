import React  from 'react';
import {Box, Checkbox, FormControlLabel, Modal, Typography} from '@material-ui/core';
import {Input} from "../../common/Forms/Input";
import {useForm} from "react-hook-form";
import {PrimaryButton} from "../../common/Forms/PrimaryButton";
import {Form} from "../../common/Forms/Form";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 2,
    paddingTop: '8px',
    paddingBottom: '5px'
};

const ProfileDataForm = (props) => {

    const {register, handleSubmit} = useForm();

    const sendProfileData = (profileData) => {
        props.setEditProfile(false)
        props.updateProfileData(profileData);
    }

    return (
        <>
            <Modal
                open={props.editProfile}
                onClose={() => {props.setEditProfile(false)}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <Box sx={style}>
                    <Typography id="modal-modal-title"
                                variant="h6"
                                component="h2"
                                style={{textAlign: 'center'}}>
                        Edit profile
                    </Typography>
                    <Form onSubmit={handleSubmit(sendProfileData)}>
                        <Input {...register('fullName')}
                               id='fullName'
                               name='fullName'
                               label='Name'
                               type='text'/>
                        <Input {...register('aboutMe')}
                               id='aboutMe'
                               name='aboutMe'
                               label='About me'
                               type='text' multiline/>
                        <Input {...register('lookingForAJobDescription')}
                               id='lookingForAJobDescription'
                               name='lookingForAJobDescription'
                               label='Describe your professional skills'
                               type='text' multiline/>
                        <FormControlLabel
                            control={<Checkbox {...register('lookingForAJob')}
                                               name='lookingForAJob'
                                               color='primary' />}
                            label='looking for a job?'/>

                        <Typography id="modal-modal-title"
                                    variant="h6"
                                    component="h2">
                            My contacts:
                        </Typography>
                        {
                            Object.keys(props.profile.contacts).map(key => (
                                <Input {...register('contacts.' + key)}
                                       key={key.id}
                                       id={key.id}
                                       name={'contacts.' + key}
                                       label={key}
                                       type='text' />))
                        }

                        <PrimaryButton>Save</PrimaryButton>
                    </Form>
                </Box>
            </Modal>
        </>
    );
};

export default ProfileDataForm;
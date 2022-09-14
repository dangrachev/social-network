import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../Redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {Form} from "../common/Forms/Form";
import {Input} from "../common/Forms/Input";
import {StyledButton} from "../common/Forms/StyledButton";
import {useForm} from "react-hook-form";
import {Button, Box, Checkbox, FormControlLabel, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import style from './Login.module.css';



const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(12),
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        margin: 'auto'
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: '15px'
    },
    btn_login: {
        margin: '16px 0 16px',
        padding: '10px 20px',
        width: '120px',
        justifyContent: 'center'
    }
}))


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        serverErrorMessage: state.auth.serverErrorMessage,
        captcha: state.auth.captchaURL
    }
}

const Login = (props) => {
    const styles = useStyles()
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur'
    })

    const sendLoginData = (data) => {
        props.login(data)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <Box flex={2} className={styles.root}>
            <Typography component={'h1'} variant={'h4'}>Login</Typography>
            <Form onSubmit={handleSubmit(sendLoginData)} className={styles.form}>
                <Input {...register('email', {
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Email should have correct format'
                    },
                    required: 'Email is a required field'
                })}
                       id='email'
                       name='email'
                       type='email'
                       label='Email'
                       error={!!errors.email}
                       helperText={errors?.email?.message}
                       fullWidth={true}/>
                <Input {...register('password', {
                    minLength: {
                        value: 3,
                        message: 'Password should contain at least 3 characters'
                    },
                    required:'Password is a required field'
                })}
                       id='password'
                       name='password'
                       type='password'
                       label='Password'
                       error={!!errors.password}
                       helperText={errors?.password?.message}
                       fullWidth={true}/>

                <FormControlLabel
                    style={{margin: '15px auto' }}
                    control={<Checkbox name='rememberMe' {...register('rememberMe')} color='primary' style={{paddingRight: '10px'}}/>}
                    label='Remember me?'/>

                {props.serverErrorMessage && <div className={style.error}>
                    <span>{props.serverErrorMessage}</span>
                </div>}

                {props.captcha && <img src={props.captcha} alt="captcha"/>}
                {props.captcha && <Input {...register('captcha', {
                    required:'Enter symbols'
                })}
                                         id='captcha'
                                         name='captcha'
                                         type='captcha'
                                         label='Enter the data from image'
                                         error={!!errors.captcha}
                                         helperText={errors?.captcha?.message}/> }

                <StyledButton type='submit'
                              variant='outlined'
                              color='secondary' className={styles.btn_login} >Sign in</StyledButton>
            </Form>
        </Box>
    );
}

export default connect(mapStateToProps, {login})(Login);
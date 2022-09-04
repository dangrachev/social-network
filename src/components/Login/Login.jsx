import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../Redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {MainContainer} from "../common/MainContainer/MainContainer";
import {Form} from "../common/Forms/Form";
import {Input} from "../common/Forms/Input";
import {PrimaryButton} from "../common/Forms/PrimaryButton";
import {useForm} from "react-hook-form";
import {Checkbox, FormControlLabel, Typography} from "@material-ui/core";
import style from './Login.module.css';


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        serverErrorMessage: state.auth.serverErrorMessage,
        captcha: state.auth.captchaURL
    }
}

const Login = (props) => {

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
        <MainContainer>
            <Typography component={'h1'} variant={'h4'}>Login</Typography>
            <Form onSubmit={handleSubmit(sendLoginData)}>
                <Input {...register('email', {
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Email should have correct format'
                    },
                    required:'Email is a required field'
                })}
                       id='email'
                       name='email'
                       type='email'
                       label='Email'
                       error={!!errors.email}
                       helperText={errors?.email?.message}/>
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
                       helperText={errors?.password?.message}/>

                <FormControlLabel
                    control={<Checkbox name='rememberMe' {...register('rememberMe')} color='primary' />}
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

                <PrimaryButton fullwidth={true}>Sign in</PrimaryButton>
            </Form>
        </MainContainer>
    );
}

export default connect(mapStateToProps, {login})(Login);
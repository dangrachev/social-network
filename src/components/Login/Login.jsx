import React from 'react';
import style from './Login.module.css';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../common/Forms/FormsControl';
import {required} from '../../utils/validator';
import {connect} from 'react-redux';
import {login} from '../../Redux/auth-reducer';
import {Redirect} from 'react-router-dom';


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={Input} validate={[required]}/>
            </div>
            <div className={style.rememberMe}>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} /> <span>remember me</span>
            </div>
            <div className={style.error}>
                {props.error && <span>{props.error}</span>}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorMessages: state.auth.errorMessages
    }
}

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} errorMessages={props.errorMessages}/>
        </div>
    );
}

export default connect(mapStateToProps, {login})(Login);
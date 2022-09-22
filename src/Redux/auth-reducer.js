import {authApi, securityApi} from '../api/requestApi';

// action types
const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const SET_CAPTCHA_URL = 'SET_CAPTCHA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    serverErrorMessage: '',
    captchaURL: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                serverErrorMessage: action.message
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.captcha
            }
        default:
            return state;
    }
}


// action creators
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
export const setErrorMessage = (message) => ({type: SET_ERROR_MESSAGE, message});
export const setCaptcha = (captcha) => ({type: SET_CAPTCHA_URL, captcha});

// thunk
export const getAuthUserData = () => {
    return async (dispatch) => {
        const response = await authApi.me();

        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const login = ({email, password, rememberMe}) => {
    return async (dispatch) => {
        const response = await authApi.login(email, password, rememberMe);

        if (response.data.resultCode === 0) {
            console.log(response)
            dispatch(getAuthUserData());
        } else if (response.data.resultCode === 1 || 10) {
            let message = response.data.messages.length ? response.data.messages[0] : 'Some error';
            dispatch(setErrorMessage(message));

            dispatch(getCaptchaURL());
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        const response = await authApi.logout();

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export const getCaptchaURL = () => {
    return async (dispatch) => {
        const response = await securityApi.getCaptcha();

        dispatch(setCaptcha(response.data.url));
    }
}

export default authReducer;
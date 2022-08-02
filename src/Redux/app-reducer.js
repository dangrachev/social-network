import {getAuthUserData} from './auth-reducer';


// action types
const SET_INITIALIZING = 'SET_INITIALIZING';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZING:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}


// action creators
export const initializedSuccess = () => ({type: SET_INITIALIZING});

// thunk
export const initializeApp = () => (dispatch) => {
    dispatch(getAuthUserData()).then(() => {
        dispatch(initializedSuccess());
    });
}


export default appReducer;
import userPhoto from '../assets/images/avatar.jpg';
import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


let inintialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    img: userPhoto
};
const authReducer =(state = inintialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payLoad
            }
        }
        default:
            return state;
    }
};
const setAuthUserData = (userId, email, login, isAuth)=> ({type: SET_AUTH_USER_DATA, payLoad: {userId, email, login, isAuth}});

export const getAuth = ()=> async (dispatch)=> {
    let data = await authAPI.getAuthMe()
    if(data.resultCode === 0) {
        let {userId, email, login} = data.data;//деструктуризация
        dispatch(setAuthUserData(userId, email, login, true));
    }
}


export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {email: message}))
            }
        });

};

export const logout=()=> {
    return (dispatch)=> {
        authAPI.logout()
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
};

export default authReducer;
import userPhoto from '../assets/images/avatar.jpg';
import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


let inintialState = {
    id: null,
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
const setAuthUserData = (id, email, login, isAuth)=> ({type: SET_AUTH_USER_DATA, payLoad: {id, email, login, isAuth}});

export const getAuth =()=> {
    return (dispatch)=> {
        authAPI.getAuth()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data;//деструктуризация
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
    }
};

export const login=(email, password, rememberMe)=> {
    return (dispatch)=> {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setAuthUserData());
                } else {
                    let action = stopSubmit()
                    dispatch(action)
                }
            });
    }
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
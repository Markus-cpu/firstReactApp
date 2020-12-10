// import userPhoto from '../assets/images/avatar.jpg';
import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'



let inintialState = {
    userId: null as string | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
}

export type InitialStateType = typeof inintialState
let initialState: InitialStateType


const authReducer =(state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                userId: 123,
                ...state,
                ...action.payLoad
            }
        }
        default:
            return state;
    }
};

export type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA
    payload: {
        userId: string | number | null
        email: string
        login: string
        isAuth: boolean
    }
}

const setAuthUserData = (userId: string | number | null, email: string | null, login: string | null, isAuth: boolean | null): SetAuthUserDataActionType => ({type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuth = ()=> async (dispatch)=> {
    let data = await authAPI.getAuthMe()
    if(data.resultCode === 0) {
        let {userId, email, login} = data.data;//деструктуризация
        dispatch(setAuthUserData(userId, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch: any) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(email, password, rememberMe, false))
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {email: message}))
    }
};
export const logout =()=> async (dispatch) => {
    let data = await authAPI.logout()
    if(data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
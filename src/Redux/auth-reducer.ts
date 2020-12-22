// import userPhoto from '../assets/images/avatar.jpg';
import {authAPI} from '../API/api'
import {stopSubmit} from 'redux-form'
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

// Action type
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

// State
let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}

export type InitialStateType = typeof initialState

export type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA
    payload: {
        userId: number | null
        email: string | null
        login: string | null
        isAuth: boolean
    }
}

const authReducer =(state = initialState, action: SetAuthUserDataActionType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                userId: 123,
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

const setAuthUserData = (
    userId:  number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
): SetAuthUserDataActionType => ({
        type: SET_AUTH_USER_DATA,
        payload: {userId, email, login, isAuth}
    })

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, SetAuthUserDataActionType>

export const getAuth = (): ThunkType => async (dispatch)=> {
    try {
        let data = await authAPI.getAuthMe()
        if(data.resultCode === 0) {
            let {id, email, login} = data.data;//деструктуризация
            dispatch(setAuthUserData(id, email, login, true))
        }
    } catch (e) {
        console.error(e.message)
    }
}

export const login = (email: string | null, password: string | null, rememberMe: boolean): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        let { email, password, rememberMe } = data.data

        dispatch(setAuthUserData(email, password, rememberMe, false))
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        //@ts-ignore
        dispatch(stopSubmit('login', {email: message}))
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout()
    if(data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;
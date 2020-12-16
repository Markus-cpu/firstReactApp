import {getAuth} from './auth-reducer'
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

// Types
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

const appReducer =(state = initialState, action: InitializedSuccessActionType): InitialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initializedSuccess = (): InitializedSuccessActionType  => ({type: INITIALIZED_SUCCESS})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, InitializedSuccessActionType>

export const initializeApp = (): ThunkType => async (dispatch) => {
    let promise = await dispatch(getAuth())
    Promise.all([promise]).then(()=> {
        dispatch((initializedSuccess))
    })
}

export default appReducer
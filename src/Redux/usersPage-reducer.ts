import {usersAPI} from '../API/api'
import {updateObjInArray} from '../utils/obj-helpers'
import { UsersType } from '../types/types'
import {AppStateType} from './redux-store'
import {ThunkAction} from 'redux-thunk'
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE ='SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> // array of users id
}

export type InitialStateType = typeof initialState

// Типизация action creators
type FollowSuccessActionType = {
    type: typeof FOLLOW
    usersId: number
}
type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    usersId: number
}
type SetUsersActionType = {
    type: typeof SET_USERS
    users: UsersType
}
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type SetUsersTotalCountActionType ={
    type: typeof SET_USERS_TOTAL_COUNT
    count: number
}
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type ToggleIsFollowingInProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_IN_PROGRESS
    isFetching: boolean
    userId: number
}

type ActionsTypes = FollowSuccessActionType | UnfollowSuccessActionType | SetUsersActionType |
    SetCurrentPageActionType | SetUsersTotalCountActionType | ToggleIsFetchingActionType | ToggleIsFollowingInProgressActionType

//здесь принимаем тот state, который необходим данному reducer
const usersPageReducer =(state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {//сразу возвращаем данный обьект, и не нужно создавать stateCopy(переменную)
                ...state,
                //вспомогательная функция, помогающая нам иммьютабельно изменить объект в массиве
                users: updateObjInArray(state.users, action.usersId, ["id"], {followed: true})
                /*state.users.map( u => {
                    if(u.id === action.usersId) {
                        return {...u, followed: true}
                    } else {
                        return u;
                    }
                })*/
            };
        }
        case UNFOLLOW: {
            return  {
                ...state,
                users: updateObjInArray(state.users, action.usersId, ["id"], {followed: false})
                /*state.users.map( u => {
                    if(u.id === action.usersId) {
                        return {...u, followed: false}
                    } else {
                        return u;
                    }
                })*/
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [action.users]
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state, totalUsersCount: action.count
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        }
        default:
            return state
    }
}

//ДВЕ чистых функций, которые возвращают action
const followSuccess =(usersId: number): FollowSuccessActionType => ({type: FOLLOW, usersId})
const unfollowSuccess =(usersId: number): UnfollowSuccessActionType => ({type: UNFOLLOW, usersId})

//С сервера придут к нам данные о users
//и мы их добавим в state
export const setUsers =(users: UsersType): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPage =(currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount =(totalUsersCount: number): SetUsersTotalCountActionType => ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount})

//анимация загрузки
export const toggleIsFetching =(isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})

//отключение кнопки, для того чтобы предотвратить множественный и один и тот же запрос
export const toggleIsFollowingInProgress =(isFetching: boolean, userId: number): ToggleIsFollowingInProgressActionType => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
type DispatchAction = Dispatch<ActionsTypes>
type ActionCreatorType = FollowSuccessActionType | UnfollowSuccessActionType

//Создаем функцию санку(thunk)
export const requestUsers = (requestPage: number, pageSize: number): ThunkType => {
     return async (dispatch) => {
        //Preloader, анимация загрузки
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(requestPage));
        //в данной функции происходит get-запрос на сервер
        //мы ее экспортируем из api.js
        //она возвращает нам promise(обещание)
        //затем(then) мы этот ответ(response) диспатчим в store
        let data = await usersAPI.getUsers(requestPage, pageSize)
         //когда данные получены, анимация исчезает
         //и отображаются данные, полученные с сервера
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    }
}

const _onUnSubscription = async (
        dispatch: DispatchAction,
        id: number,
        apiMethod: any,
        actionCreator: (id: number) => ActionCreatorType
    ) => {
    dispatch(toggleIsFollowingInProgress(true, id))
    let data = await apiMethod(id)
    if(data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleIsFollowingInProgress(false, id))
}

export const unfollow = (id: number): ThunkType => {
    return async (dispatch) => {
        await _onUnSubscription(dispatch, id, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}
export const follow = (id: number): ThunkType => {
    return async (dispatch) => {
        await _onUnSubscription(dispatch, id, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export default  usersPageReducer
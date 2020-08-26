import {usersAPI} from "../API/api";
import {updateObjInArray} from "../utils/obj-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE ='SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';
let inintialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

//здесь принимаем тот state, который необходим данному reducer
const usersPageReducer =(state = inintialState, action) => {
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
                users: action.users
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
            return state;
    }
};
//ДВЕ чистых функций, которые возвращают action
const followSuccess =(usersId)=> ({type: FOLLOW, usersId});
const unfollowSuccess =(usersId)=> ({type: UNFOLLOW, usersId});
//С сервера придут к нам данные о users
//и мы их добавим в state
export const setUsers =(users)=> ({type: SET_USERS, users});
export const setCurrentPage =(currentPage)=> ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount =(totalUsersCount)=> ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount});
//анимация загрузки
export const toggleIsFetching =(isFetching)=> ({type: TOGGLE_IS_FETCHING, isFetching});
//отключение кнопки, для того чтобы предотвратить множественный и один и тот же запрос
export const toggleIsFollowingInProgress =(isFetching, userId)=> ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId});

//Создаем функцию санку(thunk)
export const requestUsers =(requestPage, pageSize)=> {
     return (dispatch) => {
        //Preloader, анимация загрузки
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(requestPage));
        //в данной функции происходит get-запрос на сервер
        //мы ее экспортируем из api.js
        //она возвращает нам promise(обещание)
        //затем(then) мы этот ответ(response) диспатчим в store
        usersAPI.getUsers(requestPage, pageSize).then(data => {
            //когда данные получены, анимация исчезает
            //и отображаются данные, полученные с сервера
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });
    };
};

const onUnSubscription = async(dispatch, id, apiMethod, actionCreator)=> {
    dispatch(toggleIsFollowingInProgress(true, id));
    let data = await apiMethod(id)
    if(data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleIsFollowingInProgress(false, id));
}
export const unfollow =(id)=> {
    return async (dispatch) => {
        await onUnSubscription(dispatch, id, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    };
};
export const follow =(id)=> {
    return async (dispatch) => {
        await onUnSubscription(dispatch, id, usersAPI.follow.bind(usersAPI), followSuccess);
    };
};
export default  usersPageReducer;
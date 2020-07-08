const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE ='SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
let inintialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false
};

//здесь принимаем тот state, который необходим данному reducer
const usersPageReducer =(state = inintialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {//сразу возвращаем данный обьект, и не нужно создавать stateCopy(переменную)
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.usersId) {
                        return {...u, followed: true}
                    } else {
                        return u;
                    }
                })
            };
        }
        case UNFOLLOW: {
            return  {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.usersId) {
                        return {...u, followed: false}
                    } else {
                        return u;
                    }
                })
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
        default:
            return state;
    }
};
//ДВЕ чистых функций, которые возвращают action
export const follow =(usersId)=> ({type: FOLLOW, usersId});
export const unfollow =(usersId)=> ({type: UNFOLLOW, usersId});
//С сервера придут к нам данные о users
//и мы их добавим в state
export const setUsers =(users)=> ({type: SET_USERS, users});
export const setCurrentPage =(currentPage)=> ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount =(totalUsersCount)=> ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount});
export const toggleIsFetching =(isFetching)=> ({type: TOGGLE_IS_FETCHING, isFetching});

export default  usersPageReducer;
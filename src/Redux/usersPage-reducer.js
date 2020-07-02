const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';

let inintialState = {
    users: [
        /*{id: 1, avatarUrl: 'https://s001.radikal.ru/i196/1401/ba/d9e3d67545fa.jpg',
            followed: true, fullname: 'Dima S', status: 'I am a big Boy!!!', location: {country: 'Belarus', city: 'Minsk'}},
        {id: 2, avatarUrl: 'https://99px.ru/sstorage/1/2016/05/image_12405162254187087407.gif',
            followed: false, fullname: 'Masha T', status: 'I am a big Girl!!!', location: {country: 'Russian', city: 'Kazan'}},
        {id: 3, avatarUrl: 'https://s00.yaplakal.com/pics/userpic/6/7/5/av-865576.jpg',
            followed: true, fullname: 'Maksim O', status: 'I am a big Boy too!!!', location: {country: 'Russian', city: 'Moscow'}},
        {id: 4, avatarUrl: 'https://s001.radikal.ru/i196/1401/ba/d9e3d67545fa.jpg',
            followed: false, fullname: 'Vlad E', status: 'I am a boss!!!', location: {country: 'Ukraine', city: 'Kiev'}}*/
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2
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
                //склеиваем два массива, который в state, и тот, что приходит в action
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
        default:
            return state;
    }
};
//ДВЕ чистых функций, которые возвращают action
export const followAC =(usersId)=> ({type: FOLLOW, usersId});
export const unfollowAC =(usersId)=> ({type: UNFOLLOW, usersId});
//С сервера придут к нам данные о users
//и мы их добавим в state
export const setUsersAC =(users)=> ({type: SET_USERS, users});
export const setCurrentPageAC =(currentPage)=> ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC =(totalUsersCount)=> ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount});

export default  usersPageReducer;
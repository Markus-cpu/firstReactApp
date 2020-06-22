const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let inintialState = {
    users: [
        /*{id: 1, followed: true, fullname: 'Dima S', status: 'I am a big Boy!!!', location: {country: 'Belarus', city: 'Minsk'}},
        {id: 2, followed: false, fullname: 'Masha T', status: 'I am a big Girl!!!', location: {country: 'Russian', city: 'Kazan'}},
        {id: 3, followed: true, fullname: 'Maksim O', status: 'I am a big Boy too!!!', location: {country: 'Russian', city: 'Moscow'}},
        {id: 4, followed: false, fullname: 'Vlad E', status: 'I am a boss!!!', location: {country: 'Ukraine', city: 'Kiev'}}*/
    ]
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
                //склеиваем два массива, который в state, и тото что приходит в action
                users: [...state.users, ...action.users]
            }
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

export default  usersPageReducer;
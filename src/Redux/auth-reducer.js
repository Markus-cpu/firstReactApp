import userPhoto from '../assets/images/avatar.jpg';
import {authAPI} from "../API/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

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
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
};
const setAuthUserData = (id, email, login)=> ({type: SET_AUTH_USER_DATA, data: {id, email, login}});

export const getAuth =()=> {
    return (dispatch)=> {
        authAPI.getAuth()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data;//деструктуризация
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
};

export default authReducer;
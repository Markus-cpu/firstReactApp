import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import messagesPageReducer from './messagesPage-reducer'
import contentPageReducer from './contentPage-reducer'
import sidebarReducer from './sidebar-reducer'
import usersPageReducer from './usersPage-reducer'
import contactReducer from './contact-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from "redux-thunk"
import appReducer from './app-reducer'
//@ts-ignore
import { reducer as formReducer } from 'redux-form'


let rootReducer = combineReducers({
    contentPage: contentPageReducer,
    messagesPage: messagesPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersPageReducer,
    contactPage: contactReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type RootReducerType = typeof rootReducer //функция, возвращающая глобальный state
export type AppStateType = ReturnType<RootReducerType>

//устанавливаем связь с redux devtools
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.__store__ = store
export default store
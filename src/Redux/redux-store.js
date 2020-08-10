import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesPageReducer from "./messagesPage-reducer";
import contentPageReducer from "./contentPage-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersPageReducer from "./usersPage-reducer";
import contactReducer from "./contact-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    contentPage: contentPageReducer,
    messagesPage: messagesPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersPageReducer,
    contactPage: contactReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
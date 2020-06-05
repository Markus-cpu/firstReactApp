import {combineReducers, createStore} from "redux";
import messagesPageReducer from "./messagesPage-reducer";
import contentPageReducer from "./contentPage-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    contentPage: contentPageReducer,
    messagesPage: messagesPageReducer,
    sidebar: sidebarReducer
});
let store = createStore(reducers);

export default store;
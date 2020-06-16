import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../Redux/contentPage-reducer';
import Infoblock from "./Infoblock";

//данная контейнерная компонента является оберткой для обычной компоненты (Infoblock)
//сюда приходят данные и методы из store/state
//для того чтобы оставить нашу обычную компоненту чистой, без всякой лишней информации из
//мира store(BLL)
const InfoblockContainer = (props) => {
    let state = props.store.getState();
    let addPost =()=> {
        let action = addPostActionCreator();//функция actionCreator(для создания action object
        props.store.dispatch(action);
    };
    let PostChange =(text)=> {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    };
    return (
        <div>
          <Infoblock addPost={addPost} updateNewPostChange={PostChange} mypostData={state.contentPage.mypostData}
                     myNewPost={state.contentPage.myNewPost} dialogsData={state.messagesPage.dialogsData}/>
        </div>
    )
};
export default InfoblockContainer;
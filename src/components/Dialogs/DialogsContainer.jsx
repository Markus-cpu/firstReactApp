import Dialogs from './Dialogs';
import {addMessage} from '../../Redux/messagesPage-reducer';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

//передаем store через контекст, а не через props
//тем самым перепригиваем
/*const DialogsContainer = () => {
    /!*let state = props.store.getState().messagesPage;

    let addMessage = () => {//обработчик события
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    };

    let MessageChange = (text) => {//определяем обработчик события
        let action = updateNewMessageActionCreator(text);
        props.store.dispatch(action);//отправляем в store.js то значение, что вводит user в поле textarea
    };*!/

    //здесь переменные вызываются
    return (
        <StoreContext.Consumer>
            {
                (store) => {//store мы берем из контекста
                    let state = store.getState().messagesPage;
                    let addMessage =()=> {
                        let action = addMessageActionCreator();
                        store.dispatch(action);
                    };
                    let MessageChange =(text)=> {
                        let action = updateNewMessageActionCreator(text);
                        store.dispatch(action);
                    };
                    //в компоненту Dialogs  мы передаем всеравно через props
                    return <Dialogs addMessage={addMessage} updateNewMessage={MessageChange} dialogsData={state.dialogsData}
                             messagesData={state.messagesData} newMessages={state.newMessages}/>
                }

            }
        </StoreContext.Consumer>
    )
};*/
//когда у нас в state происходят изменения, запускается
//данная функция, и формируется новый обьект, и должен сравниться со старым обьектом
const mapStateToProps =(state)=> {
    return {
        //какие данные необходимо для нашей компоненты
        //мы должны передать в connect
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessages: state.messagesPage.newMessages
    }
};
export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect)(Dialogs);
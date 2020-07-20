const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let inintialState = {
        dialogsData: [
        {id: 1, name: 'Mr. Frick',  ava: 'https://vrgames.by/sites/default/files/pictures/picture-164663-1516479456.jpg'},
        {id: 2, name: 'Victor', ava: 'https://i.gifer.com/ZA6h.gif'},
        {id: 3, name: 'Tanya',  ava: 'https://www.newkaliningrad.ru/forum/uploads/profile/photo-23603.gif'},
        {id: 4, name: 'Sveta',  ava: 'https://acomics.ru/upload/avatar/id33428-qcu0upxr41.jpg'},
        {id: 5, name: 'Mark',   ava: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000001/1553560094000/image?w=100&h=100&bg_color=000000&opacity=100&_version=00_09_000'},
        {id: 6, name: 'Leila',  ava: 'https://bigvis.net/temp/avatar/529avatar.gif'}],
    messagesData: [
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'What do you think about me?'},
        {id: 4, message: 'Who Am I?'},
        {id: 5, message: 'You know me, my friend?'},
        {id: 6, message: 'No, I\'m not!'}],
    newMessages: '<<<users Messages>>>'//здесь сохраняем новое сообщение как строку, а не объект
};

const messagesPageReducer = (state = inintialState, action) => {//принимаем тот state, который необходим данной функции reducer
    //let stateCopy;
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {//сюда добавляем новое значение (сообщение)
                id: 5,
                message: state.newMessages
            };
            return {//сразу возвращаем объект
                //копируем state
                ...state,
                //далее копируем массив, и push'им newMessage в него
                messagesData: [...state.messagesData, newMessage],
                //обнуляем поле в textarea
                newMessages: '',
            };
            /*stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessages = '';*/
            /*state.messagesData.push(newMessage);//записываем в ассоциативный массив, новый объект с данными
            state.newMessages = '';//обнуления поля*/
            //return stateCopy;//возвращаем новый, преобразованный state
        }
        case UPDATE_NEW_MESSAGE: {
            return {
                ...state,
                newMessages: action.newMessage
            };
            //stateCopy.messagesData = [...state.messagesData];
            //stateCopy.newMessages = action.newMessage;//записываем это значение, которое приходит из вне,
            // в объект messagesPage  и присваеваем это значение свойству newMessages, изменяем state
            //return stateCopy;//возвращаем новый, преобразованный state
        }
        default:
            return state;
    }

};

export const addMessage =()=> ({type: ADD_MESSAGE});
//так-как мы передаем объект, ложим его в круглые скобки
export const updateNewMessage =(text)=> ({type: UPDATE_NEW_MESSAGE, newMessage: text});

export default messagesPageReducer;
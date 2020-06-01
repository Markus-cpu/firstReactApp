'use strict';

let rerenderEntireTree =()=> {
    console.log('State changed....');
};
// Создаём ОПП объект store и упакуем сюда state и функции
export let store = {

};

let state = {

    messagesPage: {
        dialogsData: [
           {id: 1, name: 'Mr. Frick',  ava: 'https://vrgames.by/sites/default/files/pictures/picture-164663-1516479456.jpg'},
           {id: 2, name: 'Victor', ava: 'https://i.gifer.com/ZA6h.gif'},
           {id: 3, name: 'Tanya',  ava: 'https://www.newkaliningrad.ru/forum/uploads/profile/photo-23603.gif'},
           {id: 4, name: 'Sveta',  ava: 'https://acomics.ru/upload/avatar/id33428-qcu0upxr41.jpg'},
           {id: 5, name: 'Mark',   ava: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000001/1553560094000/image?w=100&h=100&bg_color=000000&opacity=100&_version=00_09_000'},
           {id: 6, name: 'Leila',  ava: 'https://bigvis.net/temp/avatar/529avatar.gif'}],
        messagesData: [
           {message: 'How are you?'},
           {message: 'What\'s up?'},
           {message: 'What do you think about me?'}, 
           {message: 'Who Am I?'},
           {message: 'You know me, my friend?'},
           {message: 'No, I\'m not!'}],
        newMessages: 'users Messages>>>'
    },

    sidebar: {
        menuLink: [
            {id: 1, link: 'Home', path: '/home'},
            {id: 2, link: 'Content', path: '/content'},
            {id: 3, link: 'Contact', path: '/contact'},
            {id: 4, link: 'Dialogs', path: '/dialogs'},
            {id: 5, link: 'Email', path: '/email'},
            {id: 6, link: 'Friends', path: '/friends'}
        ]
    },

    contentPage: {
        mypostData: [
           {id: 1, post: 'React изначально был спроектирован так, чтобы его можно было внедрять постепенно. Другими словами, вы можете начать с малого и использовать только ту функциональность React, которая необходима вам в данный момент. Информация в этом разделе будет полезна в любой ситуации: при первом знакомстве с React, при создании простой динамической HTML-страницы и даже при проектировании сложного React-приложения.'},
           {id: 2, post: 'Но раньше, в старые времена, прямого доступа к прототипу объекта не было.'},
           {id: 3, post: 'I like death metal music!!!'},
           {id: 4, post: 'Но раньше,'}],
        myNewPost: 'Markus-cpu'
    },

};
export default state;
window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        post: state.contentPage.myNewPost
    };
    state.contentPage.mypostData.push(newPost);
    state.contentPage.myNewPost = '';
    rerenderEntireTree(state);
};

export const updateNewPost = (newPost) => {
    state.contentPage.myNewPost = newPost;
    rerenderEntireTree(state);
};

export const addMessage =()=> {
    let newMessage = {//сюда добавляем новое значение (сообщение)
        id: 5,
        message: state.messagesPage.newMessages
    };
    state.messagesPage.messagesData.push(newMessage);//записываем в ассоциативный массив, новый объект с данными
    state.messagesPage.newMessages = '';//обнуления поля
    rerenderEntireTree(state);//перерисовка UI с новыми данными
};

export const updateNewMessage =(newMessage)=> {//сюда поступает то значение, что вводит user  в поле textarea
    state.messagesPage.newMessages = newMessage;//записываем это значение  в объект messagesPage и присваеваем это значение свойству newMessage
    rerenderEntireTree(state);//есть ли здесь смысл в данной функции???
};

export const sibscribe =(observer)=> {
    rerenderEntireTree = observer; //паттерн наблюдатель(observer)state
};






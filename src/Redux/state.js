'use strict';

// Создаём ОПП объект store и упакуем сюда объект state и функции(методы)
 let store = {
     _state: {

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

     },//приватный объект
     _callSubscriber() {
         console.log('State changed....');
     },//приватный метод, на прямую его нельзя использовать
     getState() {//getState вляется интерфейсом взаимодействия во внешнем мире
       return this._state;
     },
     sibscribe(observer) {
         this._callSubscriber = observer; //паттерн наблюдатель(observer)state
     },

     /*addPost() {
         let newPost = {
             id: 5,
             post: this._state.contentPage.myNewPost
         };
         this._state.contentPage.mypostData.push(newPost);
         this._state.contentPage.myNewPost = '';
         this._callSubscriber(this._state);
     },
     updateNewPost(newPost) {
         this._state.contentPage.myNewPost = newPost;
         this._callSubscriber(this._state);
     },
     addMessage() {
         let newMessage = {//сюда добавляем новое значение (сообщение)
             id: 5,
             message: this._state.messagesPage.newMessages
         };
         this._state.messagesPage.messagesData.push(newMessage);//записываем в ассоциативный массив, новый объект с данными
         this._state.messagesPage.newMessages = '';//обнуления поля
         this._callSubscriber(this._state);//перерисовка UI с новыми данными
     },
     updateNewMessage(newMessage) {//сюда поступает то значение, что вводит user  в поле textarea
         this._state.messagesPage.newMessages = newMessage;//записываем это значение  в объект messagesPage и присваеваем это значение свойству newMessage
         this._callSubscriber(this._state);//есть ли здесь смысл в данной функции???
     },*/
     //Заменили все методы по постам и сообщениям, на один метод
     //dispatch()
     dispatch(action) {
         if (action.type === 'ADD-POST') {
             let newPost = {
                 id: 5,
                 post: this._state.contentPage.myNewPost
             };
             this._state.contentPage.mypostData.push(newPost);
             this._state.contentPage.myNewPost = '';
             this._callSubscriber(this._state);
         } else if (action.type === 'UPDATE-NEW-POST') {
             this._state.contentPage.myNewPost = action.newPost;
             this._callSubscriber(this._state);
         } else if (action.type === 'ADD-MESSAGE') {
             let newMessage = {//сюда добавляем новое значение (сообщение)
                 id: 5,
                 message: this._state.messagesPage.newMessages
             };
             this._state.messagesPage.messagesData.push(newMessage);//записываем в ассоциативный массив, новый объект с данными
             this._state.messagesPage.newMessages = '';//обнуления поля
             this._callSubscriber(this._state);//перерисовка UI с новыми данными
         } else if (action.type === 'UPDATE-NEW-MESSAGE') {
             this._state.messagesPage.newMessages = action.newMessage;//записываем это значение  в объект messagesPage и присваеваем это значение свойству newMessage
             this._callSubscriber(this._state);//есть ли здесь смысл в данной функции???
         }
     }
 };

export default store;
window.store = store;












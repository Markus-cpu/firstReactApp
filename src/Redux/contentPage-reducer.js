const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let inintialState = {
    mypostData: [
        {id: 1, post: 'React изначально был спроектирован так, чтобы его можно было внедрять постепенно. Другими словами, вы можете начать с малого и использовать только ту функциональность React, которая необходима вам в данный момент. Информация в этом разделе будет полезна в любой ситуации: при первом знакомстве с React, при создании простой динамической HTML-страницы и даже при проектировании сложного React-приложения.'},
        {id: 2, post: 'Но раньше, в старые времена, прямого доступа к прототипу объекта не было.'},
        {id: 3, post: 'I like death metal music!!!'},
        {id: 4, post: 'Но раньше,'}],
    myNewPost: '<<<Markus-cpu>>>'
};

//здесь принимаем тот state, который необходим данному reducer
const contentPageReducer =(state = inintialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.myNewPost
            };
            state.mypostData.push(newPost);//я обращаюсь к contentPage  по имени параметра
            state.myNewPost = '';
            return state;//возвращаем измененный state
        case UPDATE_NEW_POST:
            state.myNewPost = action.newPost;
            return state;//возвращаем измененный state
        default:
            return state;
    }
};

export const addPostActionCreator =()=> ({type: ADD_POST});
export const updateNewPostActionCreator =(text)=> ({type: UPDATE_NEW_POST, newPost: text});

export default  contentPageReducer;
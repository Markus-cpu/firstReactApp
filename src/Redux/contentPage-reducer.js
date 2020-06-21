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
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.myNewPost
            };
            return {//сразу возвращаем данный обьект, и не нужно создавать stateCopy(переменную)
                ...state,
                mypostData: [...state.mypostData, newPost],//слева закидываем старый массив с данными
                //а справа записываем новый элемент
                myNewPost: ''
            };//создание копии объекта state поверхностно
            /*stateCopy.mypostData = [...state.mypostData]; //копируем отдельно массив mypostData
            stateCopy.mypostData.push(newPost);//
            stateCopy.myNewPost = '';*/
            /*state.mypostData.push(newPost);//я обращаюсь к contentPage  по имени параметра
            state.myNewPost = '';*/
            //return stateCopy;//возвращаем измененный state
        }
        case UPDATE_NEW_POST: {
            return  {
                ...state,
                myNewPost: action.newPost
            };
            //stateCopy.mypostData = [...state.mypostData];
            //stateCopy.myNewPost = action.newPost;
            // state.myNewPost = action.newPost;
            //return stateCopy;//возвращаем измененную копию state
        }
        default:
            return state;
    }
};

export const addPostActionCreator =()=> ({type: ADD_POST});
export const updateNewPostActionCreator =(text)=> ({type: UPDATE_NEW_POST, newPost: text});

export default  contentPageReducer;
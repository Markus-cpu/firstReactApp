import contentPageReducer, {addPost, deletePost} from './contentPage-reducer'
import React from "react";

let state = {
    mypostData: [
        {id: 1, post: 'React изначально был спроектирован так, чтобы его можно было внедрять постепенно.'},
        {id: 2, post: 'Но раньше, в старые времена, прямого доступа к прототипу объекта не было.'},
    ],
    profile: null,
    status: ' '
};

test('new post should be added', () => {
    //1. test data
    let action = addPost('Markus-cpu')
    //2.dispatch action
    let newState = contentPageReducer(state, action)
    //3. expectation
    expect (newState.mypostData.length).toBe(3)
});

test('length of post should be incremented', () => {
    //1. test data
    let action = addPost('Markus-cpu')
    //2.dispatch action
    let newState = contentPageReducer(state, action)
    //3. expectation
    expect (newState.mypostData[2].post).toBe('Markus-cpu')
});

test('after deleting length of post should be decremented', () => {
    //1. test data
    let action = deletePost(2)
    //2.dispatch action
    let newState = contentPageReducer(state, action)
    //3. expectation
    expect (newState.post.length).toBe(1)
});
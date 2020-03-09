/*
包含n個reducer函數(根據舊的state和action返回一個新的state)
 */
import {combineReducers} from 'redux'

import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from "./action-types";

const initComments = []

function comments(state = initComments, action) {
    switch (action.type) {
        case ADD_COMMENT :
            return [action.data, ...state];
        case DELETE_COMMENT :
            return state.filter((comment, index) => index !== action.data);
        case RECEIVE_COMMENTS :
            return action.data;
        default :
            return state;
    }
}

function comments2(state = initComments, action) {
    switch (action.type) {
        case ADD_COMMENT :
            return [action.data, ...state];
        case DELETE_COMMENT :
            return state.filter((comment, index) => index !== action.data);
        case RECEIVE_COMMENTS :
            return action.data;
        default :
            return state;
    }
}

//redux向外暴露的state是個甚麼結構？
// {comments : [], comments2 : []}
export default combineReducers({
    comments, comments2
})
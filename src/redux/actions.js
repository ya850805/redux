/*
包含了所有的action creator(action的工廠函數)
 */
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from "./action-types";

//同步增加
export const addComment = (comment) => ({type : ADD_COMMENT, data : comment})

//同步刪除
export const deleteComment = (index) => ({type : DELETE_COMMENT, data : index})

//同步接收comments
const receiveComments = (comments) => ({type : RECEIVE_COMMENTS, data : comments})

//異步從後台獲取數據
export const getComments = () => {
    return dispatch => {
        //模擬發送AJAX請求異步或取數據
        setTimeout(() => {
            const comments = [
                {userName: 'Tom',content: 'React好玩!'},
                {userName: 'Jack',content: 'React好難欸!'}
            ]
            // 分發一個同步的action
            dispatch(receiveComments(comments))
        }, 1000)
    }
}